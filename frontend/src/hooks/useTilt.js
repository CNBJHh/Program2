import { useRef, useCallback } from 'react'

/**
 * useTilt — 3D 卡片倾斜效果
 * 鼠标悬停时卡片跟随鼠标方向产生 perspective 旋转
 *
 * @param {number} maxDeg - 最大旋转角度 (默认 8)
 * @returns {{ ref, onMouseMove, onMouseLeave }}
 */
export default function useTilt(maxDeg = 8) {
  const ref = useRef(null)

  const onMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = -((y - centerY) / centerY) * maxDeg
    const rotateY = ((x - centerX) / centerX) * maxDeg

    el.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(8px)`
    el.style.transition = 'transform 0.1s ease-out'
  }, [maxDeg])

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)'
    el.style.transition = 'transform 0.5s var(--ease-out-expo)'
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
