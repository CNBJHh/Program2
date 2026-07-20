/**
 * ProgressBar — 进度条
 *
 * Props:
 *   value: number (0-100)
 *   variant: 'blue' | 'green' | 'gold' | 'danger'
 *   height: number (px)
 *   animated: boolean
 *   showLabel: boolean
 */
export default function ProgressBar({
  value = 0,
  variant = 'blue',
  height = 6,
  animated = true,
  showLabel = false,
}) {
  const gradients = {
    blue: 'var(--gradient-accent)',
    green: 'linear-gradient(90deg, #10b981, #34d399)',
    gold: 'var(--gradient-gold)',
    danger: 'linear-gradient(90deg, #ef4444, #f87171)',
  }

  const clamped = Math.min(100, Math.max(0, value))

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        flex: 1,
        height,
        background: 'rgba(255,255,255,0.06)',
        borderRadius: height / 2,
        overflow: 'hidden',
      }}>
        <div
          style={{
            height: '100%',
            width: `${clamped}%`,
            background: gradients[variant] || gradients.blue,
            borderRadius: height / 2,
            transition: 'width 0.6s var(--ease-out-expo)',
            position: 'relative',
          }}
        >
          {animated && (
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)',
              animation: 'shimmer 2s infinite',
            }} />
          )}
        </div>
      </div>
      {showLabel && (
        <span style={{
          fontSize: 'var(--font-size-xs)',
          color: 'var(--text-tertiary)',
          fontVariantNumeric: 'tabular-nums',
          minWidth: 38,
          textAlign: 'right',
        }}>
          {clamped.toFixed(1)}%
        </span>
      )}
    </div>
  )
}
