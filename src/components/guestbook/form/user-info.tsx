'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { signOut } from 'next-auth/react'

import type { Session } from 'next-auth'

import defaultAvatar from '@/assets/img/avatars/notion-like-avatar-2.png'

export function UserInfo({ session }: { session: Session | null }) {
  return (
    <motion.div className='p-2 rounded-full bg-background-secondary flex items-center gap-1 '>
      <div className='size-6 relative'>
        <Image
          fill
          quality={100}
          alt='user avatar'
          src={session?.user?.image || defaultAvatar}
          className='size-6 rounded-full'
        />
      </div>
      <span className='text-text-secondary font-fancy text-sm font-medium truncate'>
        {session?.user?.name || 'John Doe'}
      </span>

      {session && (
        <button
          className='text-red-500 ml-2 text-xs p-1 rounded-full bg-red-600/20 px-2 hover:brightness-90 active:scale-95 transition-all'
          type='button'
          onClick={() => signOut()}
        >
          log out
        </button>
      )}
    </motion.div>
  )
}
