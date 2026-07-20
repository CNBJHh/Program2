/**
 * Skeleton — 加载占位
 */
export default function Skeleton({ width = '100%', height = 16, borderRadius = 6, style }) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius,
        background: 'rgba(255,255,255,0.05)',
        animation: 'breathe 1.4s var(--ease-in-out) infinite',
        ...style,
      }}
    />
  )
}
