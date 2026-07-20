import { forwardRef } from 'react'

/**
 * GlassCard — 玻璃拟态卡片
 *
 * Props:
 *   variant: 'default' | 'heavy' | 'light' | 'gradient'
 *   hover: 'lift' | 'glow' | 'none'
 *   padding: boolean | string
 *   className, children, onClick, style
 */
const GlassCard = forwardRef(({
  variant = 'default',
  hover = 'lift',
  padding = true,
  shimmer = false,
  className = '',
  children,
  ...rest
}, ref) => {
  const cls = [
    'glass-card',
    variant === 'heavy' && 'glass-card--heavy',
    variant === 'light' && 'glass--light',
    variant === 'gradient' && 'glass-card--gradient-border',
    shimmer && 'glass-shimmer',
    rest.onClick && 'glass-card--interactive',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div
      ref={ref}
      className={cls}
      style={{
        padding: padding === true ? '20px 24px' : padding || 0,
        position: 'relative',
        ...rest.style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
})

GlassCard.displayName = 'GlassCard'
export default GlassCard
