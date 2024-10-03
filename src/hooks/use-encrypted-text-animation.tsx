'use client'

import { useState, useEffect } from 'react'

interface UseEncryptedTextAnimationProps {
  animationDuration?: number
  changeTextInterval?: number
  textToAnimate: string
  characters?: string
}

const chars = 'XzV9Qb2LzFr7tYg5K1BgQ5Xk8Pn@#!$&/()=?^~'

export function useEncryptedTextAnimation({
  animationDuration = 1100,
  changeTextInterval = 65,
  textToAnimate,
  characters = chars
}: UseEncryptedTextAnimationProps) {
  const initialEncryptedText = textToAnimate.split('').map(() => {
    const randomIndex = Math.floor(Math.random() * textToAnimate.length)

    return chars[randomIndex]
  })

  const [text, setText] = useState(initialEncryptedText)

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndexFromEncrypted = Math.floor(
        Math.random() * characters.length
      )
      const randomIndex = Math.floor(Math.random() * text.length)

      setText(
        text.map((prevText, index) => {
          if (index == randomIndex) return characters[randomIndexFromEncrypted]

          return prevText
        })
      )
    }, changeTextInterval)

    const timeout = setTimeout(() => {
      clearInterval(interval)

      setText(textToAnimate.split(''))

      clearTimeout(timeout)
    }, animationDuration)
  }, [])

  return text.join('')
}
