import { useRef, useCallback } from 'react'

/**
 * useSpotlight — 光标跟随聚光灯效果
 * 在卡片上移动鼠标时产生径向渐变高光
 *
 * @returns {{ ref, onMouseMove, onMouseLeave }}
 */
export default function useSpotlight() {
  const ref = useRef(null)

  const onMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--spot-x', `${x}%`)
    el.style.setProperty('--spot-y', `${y}%`)
    el.style.setProperty('--spot-opacity', '0.12')
  }, [])

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--spot-opacity', '0')
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
