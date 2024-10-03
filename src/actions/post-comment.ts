'use server'
import { z } from 'zod'

import { revalidatePath } from 'next/cache'

import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'

const commentSchema = z
  .string()
  .min(2, { message: 'comment must be at least 2 characters long' })
  .trim()

export async function postComment(data: FormData) {
  const session = await auth()

  if (!session || !session?.user) return

  const comment = data.get('comment')?.toString().trim()
  const isValidComment = commentSchema.safeParse(comment)

  if (!isValidComment.success) return isValidComment.error.message

  const { name, image, email } = session?.user

  await prisma.comment.create({
    data: {
      author: {
        connectOrCreate: {
          where: {
            email: email as string
          },
          create: {
            avatar: image as string,
            name: name as string,
            email: email as string
          }
        }
      },
      text: comment
    }
  })

  revalidatePath('/guestbook')
}
