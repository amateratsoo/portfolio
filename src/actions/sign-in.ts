'use server'

import { signIn as authSignIn, auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function signIn() {
  await authSignIn('google')

  const session = await auth()

  console.log(session?.user?.email)
}
