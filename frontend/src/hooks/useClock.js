import { useState, useEffect } from 'react'

/**
 * useClock — 实时时钟
 * 每秒更新，返回格式化时间对象
 */
export default function useClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const format = (d = time) => {
    const y = d.getFullYear()
    const mo = String(d.getMonth() + 1).padStart(2, '0')
    const da = String(d.getDate()).padStart(2, '0')
    const h = String(d.getHours()).padStart(2, '0')
    const mi = String(d.getMinutes()).padStart(2, '0')
    const s = String(d.getSeconds()).padStart(2, '0')
    const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    return {
      full: `${y}-${mo}-${da} ${h}:${mi}:${s}`,
      date: `${y}-${mo}-${da}`,
      weekday: week[d.getDay()],
      clock: `${h}:${mi}:${s}`,
    }
  }

  return { time, format: format() }
}
