'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Quote } from 'lucide-react'

import noiseSvg from '@/assets/svg/noise.svg'
import spotlight from '@/assets/svg/spotlight.svg'
import simpleGridPattern from '@/assets/svg/simple-grid-pattern.svg'
import avatar from '@/assets/img/avatars/avatar.jpg'

import { useEncryptedTextAnimation } from '@/hooks/use-encrypted-text-animation'

const name = 'Jossani da Cruz'

export function Hero() {
  const encryptedAnimatedName = useEncryptedTextAnimation({
    textToAnimate: name
  })

  const [isClient, setIsClient] = useState(false)

  useEffect(() => setIsClient(true), [])

  return (
    <section className='w-screen h-screen bg-background-primary relative flex justify-center items-center'>
      <article className='absolute bottom-0 right-16 pointer-events-none'>
        <Quote className='fill-background-tertiary text-background-tertiary size-40' />
      </article>

      <Image
        src={noiseSvg}
        alt=''
        className='w-screen h-screen pointer-events-none object-cover absolute top-0'
        priority
        draggable='false'
      />

      <article className='absolute bottom-8 right-10 flex flex-row'>
        <span className='text-text-secondary font-fancy font-medium text-base'>
          <span className='text-text-primary z-10 relative'>welcome</span>
          &nbsp; to my little <br /> corner on the web{' '}
        </span>
        <div className='w-fit flex items-end justify-start pb-0.5'>
          <div className='animate-hand-waving text-lg'>👋</div>
        </div>
      </article>

      <Image
        src={simpleGridPattern}
        alt=''
        className='lg:w-[52rem] pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        draggable='false'
        priority
      />

      <Image
        src={spotlight}
        alt=''
        draggable='false'
        className='hidden sm:block w-[60rem] pointer-events-none absolute -top-36 -left-80 rotate-[18deg] lg:-rotate-1 lg:-top-48 lg:-left-52 motion-safe:animate-spotlight'
      />

      <div className='mx-6 sm:mx-0 flex z-10 items-center justify-center gap-8'>
        <Image
          src={avatar}
          alt='picture showing an angel painting, this is being used to represent the author figure'
          className='hidden sm:block overflow-hidden size-32 rounded-full'
        />

        <div className='flex flex-col gap-2'>
          <span className='font-mono text-text-secondary font-medium text-base'>
            {isClient ? encryptedAnimatedName : 'qw12@590kjloYY'}
          </span>
          <h1 className='font-sans text-text-primary text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-tertiary'>
            Fullstack Developer
          </h1>

          <div className='flex'>
            <nav>
              <ul className='flex text-background-icon gap-2 mr-2'>
                <li>
                  <a target='_blank' href='https://github.com/amateratsoo'>
                    <Github size={20} />
                  </a>
                </li>

                <li>
                  <a
                    target='_blank'
                    href='https://www.linkedin.com/in/jossani-cruz-33a319292/'
                  >
                    <Linkedin size={20} />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
