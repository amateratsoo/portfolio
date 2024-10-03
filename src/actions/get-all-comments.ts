'use server'

import { prisma } from '@/lib/prisma'

export async function getAllComments() {
  const comments = await prisma.comment.findMany({
    include: {
      author: {
        select: {
          avatar: true,
          name: true
        }
      },
      likedByUser: {
        select: {
          userEmail: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return comments
}
