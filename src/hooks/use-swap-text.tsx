'use client'

import { useEffect, useState } from 'react'

interface UseSwapTextProps {
  listOfTextToSwap: string[]
  startsAt?: number
  endsAt?: number
  intervalTimeInMs?: number
}

export function useSwapText({
  listOfTextToSwap,
  startsAt = 0,
  endsAt,
  intervalTimeInMs = 100
}: UseSwapTextProps) {
  const [text, setText] = useState(listOfTextToSwap[0])

  useEffect(() => {
    let index = startsAt

    const interval = setInterval(() => {
      setText(listOfTextToSwap[index])

      if (index == listOfTextToSwap.length - 1 || index == endsAt) return

      index++
    }, intervalTimeInMs)

    const timeout = setTimeout(() => {
      clearInterval(interval)

      clearInterval(interval)
      clearTimeout(timeout)
    }, intervalTimeInMs * listOfTextToSwap.length)
  }, [])

  return text
}
