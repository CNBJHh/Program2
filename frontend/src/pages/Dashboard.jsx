import { useState, useEffect, useCallback } from 'react'
import {
  Monitor, Play, AlertTriangle, Cpu, HardDrive, Database,
} from 'lucide-react'
import { eventBus } from '../core/EventBus'
import { logger } from '../core/Logger'
import { StatCard, CpuChart, MemoryChart, AlertTable } from '../components'
import {
  fetchStats, fetchCpuTrend, fetchMemoryUsage, fetchAlerts,
} from '../mock'

export default function Dashboard() {
  const [data, setData] = useState({ stats: null, cpu: [], mem: [], alerts: [] })
  const [loading, setLoading] = useState(true)

  const loadAll = useCallback(async () => {
    try {
      logger.info('Dashboard', '正在加载数据...')
      const [stats, cpu, mem, alerts] = await Promise.all([
        fetchStats(), fetchCpuTrend(), fetchMemoryUsage(), fetchAlerts(),
      ])
      setData({ stats, cpu, mem, alerts })
      logger.info('Dashboard', '数据加载完成')
    } catch (e) {
      logger.error('Dashboard', '数据加载失败', e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadAll()
    const unsub = eventBus.on('dashboard:refresh', loadAll)
    return unsub
  }, [loadAll])

  if (loading) {
    return (
      <>
        <h2 className="page-title">运行监控仪表盘</h2>
        <p className="page-subtitle">实时掌握系统运行状态与关键指标</p>
        <div className="stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16, marginBottom: 24 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="glass-card" style={{ padding: '20px 24px', height: 100 }}>
              <div style={{ width: '60%', height: 14, borderRadius: 4, background: 'rgba(255,255,255,0.04)', animation: 'breathe 1.4s infinite', animationDelay: `${i * 0.1}s` }} />
              <div style={{ width: '40%', height: 28, borderRadius: 4, background: 'rgba(255,255,255,0.03)', animation: 'breathe 1.4s infinite', animationDelay: `${i * 0.1 + 0.2}s`, marginTop: 10 }} />
            </div>
          ))}
        </div>
      </>
    )
  }

  const { stats, cpu, mem, alerts } = data

  return (
    <>
      <h2 className="page-title">运行监控仪表盘</h2>
      <p className="page-subtitle">实时掌握系统运行状态与关键指标 · AI 驱动智能运维</p>

      {/* 统计卡片 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: 16,
        marginBottom: 24,
      }}>
        <StatCard icon={Monitor}        value={stats.totalHosts}  unit="台" label="主机总数" trend={stats.trends.hosts}  color="blue" />
        <StatCard icon={Play}           value={stats.runningHosts} unit="台" label="正常运行" color="green" />
        <StatCard icon={AlertTriangle}  value={stats.alertHosts}  unit="台" label="告警主机" trend={stats.trends.alerts} color="red" />
        <StatCard icon={Cpu}            value={stats.avgCpu}      unit="%"  label="CPU 平均使用率" trend={stats.trends.cpu} color="gold" />
        <StatCard icon={Database}       value={stats.avgMemory}   unit="%"  label="内存平均使用率" trend={stats.trends.memory} color="indigo" />
        <StatCard icon={HardDrive}      value={stats.avgDisk}     unit="%"  label="磁盘平均使用率" trend={stats.trends.disk} color="cyan" />
      </div>

      {/* 图表区 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
        marginBottom: 24,
      }}>
        <CpuChart data={cpu} />
        <MemoryChart data={mem} />
      </div>

      {/* 告警表格 */}
      <AlertTable alerts={alerts} />

      {/* 底部 */}
      <div style={{
        textAlign: 'center',
        padding: '20px 0 8px',
        color: 'var(--text-tertiary)',
        fontSize: 'var(--font-size-xs)',
        letterSpacing: '0.5px',
      }}>
        如意 Admin v2.0 · Glassmorphism + Particle Network · AI 驱动智能运维 · 数据自动刷新间隔 30s
      </div>
    </>
  )
}
