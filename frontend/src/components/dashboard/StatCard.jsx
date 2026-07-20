import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { TiltCard } from '../ui'

function TrendLabel({ value, unit }) {
  if (value === 0) return null
  const up = value > 0
  const Icon = up ? TrendingUp : TrendingDown
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      fontSize: 'var(--font-size-xs)',
      color: up ? 'var(--status-danger)' : 'var(--status-success)',
      marginTop: 4,
    }}>
      <Icon size={11} />
      较昨日 {up ? '+' : ''}{value}{unit}
    </div>
  )
}

export default function StatCard({
  icon: Icon,
  value,
  unit = '',
  label,
  trend = 0,
  color = 'blue',
}) {
  const colors = {
    blue:   { glow: '37, 99, 235',  bg: 'rgba(37, 99, 235, 0.12)',  icon: '#60a5fa' },
    green:  { glow: '16, 185, 129', bg: 'rgba(16, 185, 129, 0.12)', icon: '#34d399' },
    red:    { glow: '239, 68, 68',  bg: 'rgba(239, 68, 68, 0.12)',  icon: '#f87171' },
    gold:   { glow: '212, 167, 69', bg: 'rgba(212, 167, 69, 0.12)', icon: '#fcd34d' },
    indigo: { glow: '99, 102, 241', bg: 'rgba(99, 102, 241, 0.12)',  icon: '#a5b4fc' },
  }
  const c = colors[color] || colors.blue

  return (
    <TiltCard maxDeg={4} style={{ padding: '18px 22px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
        <div style={{
          width: 44,
          height: 44,
          borderRadius: 'var(--radius-md)',
          background: c.bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          color: c.icon,
        }}>
          {Icon && <Icon size={22} />}
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{
            fontSize: 'var(--font-size-3xl)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            fontVariantNumeric: 'tabular-nums',
          }}>
            {value}
            {unit && (
              <small style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 400,
                color: 'var(--text-tertiary)',
                marginLeft: 2,
              }}>
                {unit}
              </small>
            )}
          </div>
          <div style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--text-tertiary)',
            marginTop: 2,
          }}>
            {label}
          </div>
          {trend !== 0 && <TrendLabel value={trend} unit={unit} />}
        </div>
      </div>
    </TiltCard>
  )
}
