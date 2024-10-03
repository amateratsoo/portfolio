import { useEffect, useState } from 'react'

export function useIsMobileDevice() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfIsMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )

    setIsMobile(checkIfIsMobile)
  }, [])

  return isMobile
}
