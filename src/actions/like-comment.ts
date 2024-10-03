'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { auth } from '@/lib/auth'

export async function likeComment({
  commentId,
  userEmail
}: {
  commentId: string
  userEmail: string
}) {
  'use server'

  const session = await auth()

  const user = await prisma.user.findFirst({
    where: {
      email: userEmail
    }
  })

  if (!session || !session.user) return

  if (!user) {
    await prisma.user.create({
      data: {
        avatar: session?.user?.image as string,
        name: session?.user?.name as string,
        email: session?.user?.email as string
      }
    })
  }

  await prisma.userLikedComments.create({
    data: {
      commentId,
      userEmail
    }
  })

  revalidatePath('/guestbook')
}
