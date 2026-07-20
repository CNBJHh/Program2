import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from 'recharts'

export default function CpuChart({ data }) {
  const sampled = data.filter((_, i) => i % 4 === 0)

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
            background: 'var(--gradient-accent)',
            borderRadius: 2,
            display: 'inline-block',
          }} />
          CPU 使用率趋势
        </div>
        <span style={{
          fontSize: 'var(--font-size-xs)',
          color: 'var(--text-tertiary)',
          background: 'rgba(255,255,255,0.04)',
          padding: '4px 10px',
          borderRadius: 'var(--radius-sm)',
        }}>
          近 7 天 · 10 分钟粒度
        </span>
      </div>

      <div style={{ padding: '12px 12px 4px 4px' }}>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={sampled}>
            <defs>
              <linearGradient id="cpuGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#2563eb" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="cpuSysGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.18} />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
            <XAxis
              dataKey="time"
              tick={{ fontSize: 10, fill: 'var(--text-tertiary)' }}
              interval={35}
              tickLine={false}
              axisLine={{ stroke: 'rgba(255,255,255,0.06)' }}
            />
            <YAxis
              tick={{ fontSize: 10, fill: 'var(--text-tertiary)' }}
              tickLine={false}
              axisLine={false}
              width={40}
              domain={[0, 'auto']}
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
              labelStyle={{ color: 'var(--text-tertiary)', marginBottom: 4 }}
            />
            <Area
              type="monotone"
              dataKey="cpu_user"
              stroke="#2563eb"
              strokeWidth={2}
              fill="url(#cpuGrad)"
              name="CPU User%"
            />
            <Area
              type="monotone"
              dataKey="cpu_sys"
              stroke="#06b6d4"
              strokeWidth={1.5}
              fill="url(#cpuSysGrad)"
              name="CPU Sys%"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
