'use client'

import { useOptimistic } from 'react'
import JSConfetti from 'js-confetti'
import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'

import type { Session } from 'next-auth'

import { cn } from '@/utils/cn'
import { likeComment, unlikeComment } from '@/actions'

interface OptimisticLikeButtonAction {
  type: 'like' | 'unlike'
  email: string
}

interface LikeButtonProps {
  session: Session | null
  emailOfUsersThatLiked: string[] | []
  commentId: string
}

export function LikeButton({
  session,
  emailOfUsersThatLiked,
  commentId
}: LikeButtonProps) {
  const [optimisticEmailOfUsersThatLiked, addOptimisticaEmailOfUsersThatLiked] =
    useOptimistic<string[], OptimisticLikeButtonAction>(
      emailOfUsersThatLiked,
      (emails, { type, email }) => {
        switch (type) {
          case 'like':
            return [...emails, email]

          case 'unlike':
            return [...emails].filter(e => e != email)
        }
      }
    )

  // const jsCofetti = new JSConfetti()

  const userAlreadyLiked = optimisticEmailOfUsersThatLiked.includes(
    session?.user?.email as string
  )

  return (
    <div className='pt-5 flex gap-1 items-center justify-center w-fit'>
      <motion.button
        className='relative group disabled:cursor-not-allowed'
        disabled={!session}
        whileTap={{
          scale: session ? 1.3 : 1
        }}
        onClick={async () => {
          if (userAlreadyLiked) {
            addOptimisticaEmailOfUsersThatLiked({
              email: session?.user?.email as string,
              type: 'unlike'
            })

            await unlikeComment({
              commentId,
              userEmail: session?.user?.email as string
            })

            return
          }

          addOptimisticaEmailOfUsersThatLiked({
            email: session?.user?.email as string,
            type: 'like'
          })

          // jsCofetti.addConfetti({
          //   emojis: ['🤩', '✨', '🚀', '🥳', '🎉', '👏'],
          //   emojiSize: 38
          // })

          await likeComment({
            commentId,
            userEmail: session?.user?.email as string
          })
        }}
      >
        <Heart
          size={20}
          className={cn('text-text-secondary', {
            'fill-red-500 text-red-500': userAlreadyLiked
          })}
        />
      </motion.button>

      <span className='text-text-secondary font-fancy'>
        {optimisticEmailOfUsersThatLiked.length}
      </span>
    </div>
  )
}
