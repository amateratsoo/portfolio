import { ComponentProps } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

import { cn } from '@/utils/cn'

interface ImageWithLinkProps
  extends Pick<ComponentProps<'figure'>, 'className'> {
  caption: string
  source: string | StaticImport
  link?: string
  altText: string
}

export function ImageWithLink({
  caption,
  link,
  source,
  altText,
  className
}: ImageWithLinkProps) {
  return (
    <figure
      className={cn(
        'bg-background-tertiary h-full aspect-square rounded-md overflow-hidden border border-background-stroke group before:pointer-events-none before:opacity-0 hover:z-20 hover:before:opacity-100 before:transition-opacity before:bg-background-[#131316]/30 before:backdrop-blur-md before:z-0 before:fixed before:top-0 before:left-0 before:w-screen before:h-screen',
        className
      )}
    >
      <a
        href={link}
        target='_blank'
        className={cn('relative w-full h-full cursor-pointer', {
          'cursor-default pointer-events-none': !link
        })}
      >
        <figcaption className='absolute top-0 left-0 w-full h-14 pt-3 pl-3 bg-gradient-to-b from-zinc-800/90 to-transparent backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity text-white font-fancy text-lg'>
          {caption}
        </figcaption>
        <img
          alt={altText}
          src={source}
          className='h-full w-full object-cover group-hover:scale-110 transition-transform'
        />

        <div
          className={cn('absolute left-0 bottom-0 pb-3 pl-3', {
            hidden: !link
          })}
        >
          <div className='rounded-md bg-background-secondary/60 border border-background-stroke p-2 text-text-primary group-hover:opacity-100 opacity-0 transition group-hover:scale-100 scale-50 pointer-events-none'>
            <ArrowUpRight size={18} />
          </div>
        </div>
      </a>
    </figure>
  )
}
