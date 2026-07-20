import { Badge } from '../ui'

const levels = {
  critical: { variant: 'danger', label: '严重' },
  warning: { variant: 'warning', label: '警告' },
  info: { variant: 'info', label: '提示' },
}

export default function AlertTable({ alerts }) {
  return (
    <div className="glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{
        padding: '16px 20px',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          fontSize: 'var(--font-size-md)',
          fontWeight: 600,
          color: 'var(--text-primary)',
        }}>
          <span style={{
            width: 3,
            height: 18,
            background: 'var(--status-danger)',
            borderRadius: 2,
            display: 'inline-block',
          }} />
          最近告警记录
        </div>
        <span style={{
          fontSize: 'var(--font-size-xs)',
          color: 'var(--text-tertiary)',
          background: 'rgba(255,255,255,0.04)',
          padding: '4px 10px',
          borderRadius: 'var(--radius-sm)',
        }}>
          共 {alerts.length} 条
        </span>
      </div>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: 'var(--font-size-sm)',
      }}>
        <thead>
          <tr style={{
            background: 'rgba(255,255,255,0.02)',
          }}>
            {['时间', '主机', '类型', '级别', '告警信息', '当前值'].map((h) => (
              <th key={h} style={{
                textAlign: 'left',
                padding: '10px 20px',
                color: 'var(--text-tertiary)',
                fontWeight: 600,
                fontSize: 'var(--font-size-xs)',
                letterSpacing: '0.5px',
                borderBottom: '1px solid var(--border-subtle)',
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {alerts.map((a) => (
            <tr
              key={a.id}
              style={{ transition: 'background 0.15s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(37,99,235,0.06)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
            >
              <td style={{
                padding: '10px 20px',
                borderBottom: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                whiteSpace: 'nowrap',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--font-size-xs)',
              }}>
                {a.time}
              </td>
              <td style={{
                padding: '10px 20px',
                borderBottom: '1px solid var(--border-subtle)',
              }}>
                <code style={{
                  background: 'rgba(255,255,255,0.04)',
                  padding: '2px 8px',
                  borderRadius: 4,
                  fontSize: 'var(--font-size-xs)',
                  border: '1px solid var(--border-subtle)',
                }}>
                  {a.hostname}
                </code>
              </td>
              <td style={{
                padding: '10px 20px',
                borderBottom: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
              }}>
                {a.type}
              </td>
              <td style={{
                padding: '10px 20px',
                borderBottom: '1px solid var(--border-subtle)',
              }}>
                <Badge variant={levels[a.level]?.variant || 'info'}>
                  {levels[a.level]?.label || a.level}
                </Badge>
              </td>
              <td style={{
                padding: '10px 20px',
                borderBottom: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
              }}>
                {a.message}
              </td>
              <td style={{
                padding: '10px 20px',
                borderBottom: '1px solid var(--border-subtle)',
                fontWeight: 700,
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--font-size-sm)',
                color: a.level === 'critical' ? 'var(--status-danger)' : 'var(--text-primary)',
              }}>
                {a.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
