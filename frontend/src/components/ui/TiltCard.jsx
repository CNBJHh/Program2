import { useTilt } from '../../hooks'

/**
 * TiltCard — 3D 倾斜卡片
 * 封装 useTilt hook，鼠标悬停时产生 3D 旋转
 */
export default function TiltCard({
  maxDeg = 6,
  className = '',
  children,
  style,
  ...rest
}) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(maxDeg)

  return (
    <div
      ref={ref}
      className={`glass-card glass-card--interactive ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        padding: '20px 24px',
        transformStyle: 'preserve-3d',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
