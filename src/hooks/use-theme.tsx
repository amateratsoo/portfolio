import { useEffect, useRef, useState } from 'react'

import { themes } from '@/utils/themes'

type Theme = 'dark' | 'light'

/**
 * returns the current theme, a function to change it and a function to toggle between light and dark mode
 * @returns [currentTheme, setTheme, toggleTheme]
 */
export function useTheme(): [Theme, (theme: Theme) => void, () => void] {
  const [currentTheme, setCurrentTheme] = useState<Theme | undefined>(undefined)
  const root = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    const rootElement = document.getElementById('root') as HTMLDivElement
    const metaThemeColor = document.querySelector('meta[name=theme-color]')

    root.current = rootElement

    if (!theme) {
      const userPreferredTheme = matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      localStorage.setItem('theme', userPreferredTheme)
    }

    root.current?.setAttribute(
      'data-theme',
      localStorage.getItem('theme') as string
    )

    metaThemeColor?.setAttribute(
      'content',
      themes[localStorage.getItem('theme') as Theme].background.primary
    )
    setCurrentTheme(localStorage.getItem('theme') as Theme)
  }, [])

  function setTheme(theme: Theme) {
    root.current?.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)

    setCurrentTheme(theme)
  }

  function toggleTheme() {
    const metaThemeColor = document.querySelector('meta[name=theme-color]')

    if (currentTheme == 'dark') {
      metaThemeColor?.setAttribute('content', themes.light.background.primary)
      setTheme('light')

      return
    }

    metaThemeColor?.setAttribute('content', themes.dark.background.primary)
    setTheme('dark')
  }

  return [currentTheme as Theme, setTheme, toggleTheme]
}
