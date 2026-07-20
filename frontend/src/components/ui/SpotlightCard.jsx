import { useSpotlight } from '../../hooks'

/**
 * SpotlightCard — 光标跟随聚光灯卡片
 * 鼠标移动时产生径向渐变高光
 */
export default function SpotlightCard({
  className = '',
  children,
  color = '37, 99, 235',  // blue-500 RGB
  style,
  ...rest
}) {
  const { ref, onMouseMove, onMouseLeave } = useSpotlight()

  return (
    <div
      ref={ref}
      className={`glass-card glass-card--interactive ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        padding: '20px 24px',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
      {...rest}
    >
      {/* Spotlight overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(${color}, var(--spot-opacity, 0)) 0%, transparent 60%)`,
          pointerEvents: 'none',
          zIndex: 0,
          transition: 'opacity 0.3s ease',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}
