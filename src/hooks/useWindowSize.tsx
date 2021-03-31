import { useState, useEffect } from 'react'

interface windowSize {
  width: number
  height: number
}

export const useWindowSize = (): windowSize => {
  const getSize = (): windowSize => ({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    const handleResize = () => setWindowSize(getSize())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
