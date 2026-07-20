/**
 * GlassButton — 玻璃拟态按钮
 *
 * Props:
 *   variant: 'primary' | 'danger' | 'ghost' | 'gold'
 *   size: 'sm' | 'md' | 'lg'
 *   icon: ReactNode (left icon)
 *   loading: boolean
 */
export default function GlassButton({
  variant = 'primary',
  size = 'md',
  icon,
  loading = false,
  className = '',
  children,
  disabled,
  ...rest
}) {
  const colors = {
    primary: {
      bg: 'rgba(37, 99, 235, 0.25)',
      border: 'rgba(37, 99, 235, 0.4)',
      hoverBg: 'rgba(37, 99, 235, 0.4)',
      text: '#93c5fd',
    },
    danger: {
      bg: 'rgba(239, 68, 68, 0.2)',
      border: 'rgba(239, 68, 68, 0.35)',
      hoverBg: 'rgba(239, 68, 68, 0.35)',
      text: '#fca5a5',
    },
    ghost: {
      bg: 'rgba(255, 255, 255, 0.06)',
      border: 'rgba(255, 255, 255, 0.1)',
      hoverBg: 'rgba(255, 255, 255, 0.12)',
      text: 'rgba(255, 255, 255, 0.75)',
    },
    gold: {
      bg: 'rgba(212, 167, 69, 0.18)',
      border: 'rgba(212, 167, 69, 0.35)',
      hoverBg: 'rgba(212, 167, 69, 0.3)',
      text: '#fcd34d',
    },
  }

  const c = colors[variant] || colors.primary
  const sizes = { sm: '6px 12px', md: '8px 18px', lg: '12px 24px' }
  const fontSizes = { sm: 12, md: 13, lg: 15 }

  return (
    <button
      className={className}
      disabled={disabled || loading}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: sizes[size],
        fontSize: fontSizes[size],
        fontWeight: 600,
        color: c.text,
        background: c.bg,
        border: `1px solid ${c.border}`,
        borderRadius: 'var(--radius-md)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'all 0.2s var(--ease-out-expo)',
        letterSpacing: '0.5px',
        userSelect: 'none',
      }}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.background = c.hoverBg
      }}
      onMouseLeave={(e) => {
        if (!disabled) e.currentTarget.style.background = c.bg
      }}
      {...rest}
    >
      {loading ? (
        <span className="animate-spin" style={{ width: 16, height: 16, border: '2px solid transparent', borderTopColor: c.text, borderRadius: '50%', display: 'inline-block' }} />
      ) : icon ? (
        <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>
      ) : null}
      {children}
    </button>
  )
}
