/**
 * Badge — 状态标签
 *
 * Props:
 *   variant: 'success' | 'warning' | 'danger' | 'info' | 'neutral'
 *   dot: boolean — 显示小圆点
 */
export default function Badge({ variant = 'info', dot = true, children }) {
  const colors = {
    success: { bg: 'var(--status-success-bg)', color: 'var(--status-success)', dot: '#10b981' },
    warning: { bg: 'var(--status-warning-bg)', color: 'var(--status-warning)', dot: '#f59e0b' },
    danger: { bg: 'var(--status-danger-bg)', color: 'var(--status-danger)', dot: '#ef4444' },
    info: { bg: 'var(--status-info-bg)', color: 'var(--status-info)', dot: '#3b82f6' },
    neutral: { bg: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)', dot: '#9ca3af' },
  }
  const c = colors[variant] || colors.info

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '3px 10px',
        background: c.bg,
        color: c.color,
        borderRadius: '20px',
        fontSize: 'var(--font-size-xs)',
        fontWeight: 600,
        letterSpacing: '0.3px',
        whiteSpace: 'nowrap',
      }}
    >
      {dot && (
        <span style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: c.dot,
          boxShadow: `0 0 6px ${c.dot}`,
        }} />
      )}
      {children}
    </span>
  )
}
