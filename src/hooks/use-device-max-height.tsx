'use client'

import { useState, useEffect } from 'react'

export function useDeviceMaxHeight({ maxHeight }: { maxHeight: number }) {
  const [isDeviceMaxHeight, setIsDeviceMaxHeight] = useState(false)

  useEffect(() => {
    function updateDeviceMaxHeight() {
      setIsDeviceMaxHeight(
        window.matchMedia(`(max-height: ${maxHeight}px)`).matches
      )
    }

    updateDeviceMaxHeight()

    window.addEventListener('resize', updateDeviceMaxHeight)

    return () => window.removeEventListener('resize', updateDeviceMaxHeight)
  }, [])

  return isDeviceMaxHeight
}
