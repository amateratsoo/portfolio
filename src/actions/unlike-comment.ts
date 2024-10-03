'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function unlikeComment({
  commentId,
  userEmail
}: {
  commentId: string
  userEmail: string
}) {
  'use server'

  await prisma.userLikedComments.delete({
    where: {
      commentId_userEmail: {
        commentId,
        userEmail
      }
    }
  })

  revalidatePath('/guestbook')
}
