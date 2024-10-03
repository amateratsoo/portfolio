'use client'

import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { Github, Globe } from 'lucide-react'

import { Tooltip } from '@/components/tooltip'
import { cn } from '@/utils/cn'
import { useDeviceMaxHeight } from '@/hooks/use-device-max-height'

import type { ProjectInfo } from '@/data/projects'
import type { CursorProps } from '@/components/home/projects/projects'

interface ProjectInfoProps extends ProjectInfo {
  setCursorProps?: Dispatch<SetStateAction<CursorProps>>
  cursorProps: CursorProps
}

const PREVIEW_TEXT = 'click to see it live 🌍'
const GITHUB_TEXT = 'go to github 🐙'
const APP_LIVE_TEXT = 'go to website 🌍'

export function ProjectInfo({
  preview,
  title,
  technologies,
  description,
  githubUrl,
  liveUrl,
  setCursorProps = () => {},
  cursorProps
}: ProjectInfoProps) {
  const isShortDevice = useDeviceMaxHeight({ maxHeight: 845 })

  return (
    <div
      className={cn('flex-col sm:scale-100 sm:flex-row flex gap-6 relative', {
        'scale-90': isShortDevice
      })}
    >
      <div
        className='group sm:min-w-[23rem] w-[23rem] h-[23.875rem] rounded-md overflow-hidden'
        onPointerEnter={() =>
          setCursorProps({
            color: cursorProps.color,
            text: PREVIEW_TEXT
          })
        }
        onPointerLeave={() =>
          setCursorProps(prev => {
            return {
              ...prev,
              text: cursorProps.text
            }
          })
        }
      >
        <a href={liveUrl} className='cursor-none' target='_blank'>
          <Image
            alt=''
            src={preview}
            className='sm:min-w-[23rem] w-[23rem] h-[23.875rem] rounded-sm overflow-hidden group-hover:sm:scale-110 transition-transform'
          />
        </a>
      </div>

      <div
        onPointerEnter={() =>
          setCursorProps(prev => {
            return {
              ...prev,
              color: cursorProps.color
            }
          })
        }
      >
        <div className='flex flex-col gap-2'>
          <h2 className='font-fancy text-4xl text-text-tertiary'>{title}</h2>
          <ul className='flex gap-2 cursor-none'>
            {technologies.map(({ icon, name }) => (
              <Tooltip text={name} key={name}>
                <div
                  className='rounded-full p-1 bg-background-tertiary w-fit h-fit border border-background-stroke overflow-hidden'
                  key={name}
                >
                  <Image src={icon} alt='' className='size-6' />
                </div>
              </Tooltip>
            ))}
          </ul>
        </div>

        <div className='text-text-primary mt-3 font-fancy'>{description}</div>

        <ul
          className='flex text-background-icon gap-2 mt-6'
          onPointerLeave={() =>
            setCursorProps(prev => {
              return {
                ...prev,
                text: cursorProps.text
              }
            })
          }
        >
          {githubUrl && (
            <li
              onPointerEnter={() =>
                setCursorProps(prev => {
                  return {
                    ...prev,
                    text: GITHUB_TEXT
                  }
                })
              }
            >
              <a target='_blank' href={githubUrl} className='cursor-none'>
                <Github size={20} />
              </a>
            </li>
          )}

          {liveUrl && (
            <li
              onPointerEnter={() =>
                setCursorProps(prev => {
                  return {
                    ...prev,
                    text: APP_LIVE_TEXT
                  }
                })
              }
            >
              <a target='_blank' href={liveUrl} className='cursor-none'>
                <Globe size={20} />
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
