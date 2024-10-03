import { cn } from '@/utils/cn'
import { ComponentProps, ReactNode } from 'react'

interface BlockquoteProps extends Pick<ComponentProps<'article'>, 'className'> {
  children: ReactNode
  author?: string
  citeSource?: string
}

export function Blockquote({
  children,
  author,
  citeSource,
  className
}: BlockquoteProps) {
  return (
    <article
      className={cn(
        'bg-background-tertiary flex-1 border border-background-stroke rounded-md flex flex-col justify-between p-8 text-2xl font-serif font-bold italic gap-2',
        className
      )}
    >
      <blockquote cite={citeSource}>
        <p>“{children}”</p>
      </blockquote>

      {author && (
        <span className='text-base font-fancy font-normal not-italic text-text-secondary'>
          - {author}
        </span>
      )}
    </article>
  )
}
