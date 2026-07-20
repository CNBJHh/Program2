import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell,
} from 'recharts'

const TYPE_COLORS = {
  application: '#3b82f6',
  database: '#6366f1',
  cache: '#06b6d4',
  message: '#818cf8',
  gpu: '#a78bfa',
}

export default function MemoryChart({ data }) {
  const sorted = [...data].sort((a, b) => b.mem_used - a.mem_used)

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
            background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
            borderRadius: 2,
            display: 'inline-block',
          }} />
          各主机内存使用
        </div>
        <span style={{
          fontSize: 'var(--font-size-xs)',
          color: 'var(--text-tertiary)',
          background: 'rgba(255,255,255,0.04)',
          padding: '4px 10px',
          borderRadius: 'var(--radius-sm)',
        }}>
          Top 10 · 实时
        </span>
      </div>

      <div style={{ padding: '12px 12px 4px 4px' }}>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={sorted} layout="vertical" margin={{ left: 10 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.04)"
              horizontal={false}
            />
            <XAxis
              type="number"
              tick={{ fontSize: 10, fill: 'var(--text-tertiary)' }}
              tickLine={false}
              axisLine={{ stroke: 'rgba(255,255,255,0.06)' }}
              domain={[0, 100]}
              unit="%"
            />
            <YAxis
              type="category"
              dataKey="hostname"
              tick={{ fontSize: 11, fill: 'var(--text-secondary)' }}
              tickLine={false}
              axisLine={false}
              width={100}
            />
            <Tooltip
              contentStyle={{
                background: 'rgba(15, 21, 37, 0.95)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10,
                fontSize: 12,
                color: '#e5e7eb',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              }}
              formatter={(val) => [`${val}%`, '内存使用率']}
            />
            <Bar
              dataKey="mem_used"
              name="内存使用率"
              radius={[0, 5, 5, 0]}
              barSize={16}
              background={{ fill: 'rgba(255,255,255,0.03)', radius: 5 }}
            >
              {sorted.map((entry, i) => (
                <Cell
                  key={i}
                  fill={TYPE_COLORS[entry.type] || '#3b82f6'}
                  style={{ filter: 'drop-shadow(0 0 4px rgba(37,99,235,0.25))' }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
