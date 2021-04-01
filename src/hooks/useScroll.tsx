import { useCallback, useEffect, useMemo, useState } from 'react'

export const useScroll = (): number => {
  const [positionY, setPositionY] = useState(0)

  const data = useMemo(
    () => ({
      ease: 0.1,
      current: 0,
      previous: 0,
      rounded: 0,
    }),
    []
  )

  const skewScrolling = useCallback(() => {
    data.current = window.scrollY
    data.previous += (data.current - data.previous) * data.ease
    data.rounded = Math.round(data.previous * 100) / 100
    setPositionY(data.rounded)
    requestAnimationFrame(() => skewScrolling())
  }, [data])

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling())
  }, [skewScrolling])

  return positionY
}
