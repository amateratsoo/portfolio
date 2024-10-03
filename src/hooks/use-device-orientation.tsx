'use client'

import { useEffect, useState } from 'react'

type DeviceOrientation = 'landscape' | 'portrait'

export function useDeviceOrientation() {
  const [deviceOrientation, setDeviceOrientation] =
    useState<DeviceOrientation | null>('landscape')

  useEffect(() => {
    function updateDeviceOrientation() {
      const orientation = window.matchMedia('(orientation: portrait)').matches
        ? 'portrait'
        : 'landscape'

      setDeviceOrientation(orientation)
    }

    updateDeviceOrientation()

    window.addEventListener('resize', updateDeviceOrientation)

    return () => window.removeEventListener('resize', updateDeviceOrientation)
  }, [])

  return deviceOrientation
}
