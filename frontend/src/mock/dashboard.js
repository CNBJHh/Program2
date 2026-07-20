/**
 * Mock API — 仪表盘数据层
 *
 * 所有函数返回 Promise，模拟真实 API 调用延迟。
 * 后续接入 Gin 后端时，只需将这些函数改为调用 api.get() 即可。
 */

const delay = (ms = 260) => new Promise((r) => setTimeout(r, ms))

/** 统计卡片 */
export async function fetchStats() {
  await delay(180)
  return {
    totalHosts: 156,
    runningHosts: 148,
    alertHosts: 3,
    avgCpu: 44.3,
    avgMemory: 65.2,
    avgDisk: 38.7,
    trends: { cpu: -2.1, memory: 1.5, disk: -0.4, hosts: 0, alerts: -1 },
  }
}

/** CPU 使用率趋势 (7天 × 10分钟粒度) */
export async function fetchCpuTrend() {
  await delay(300)
  const hours = []
  const now = new Date()
  for (let i = 1007; i >= 0; i--) {
    const d = new Date(now - i * 600_000)
    const label = `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
    const wave = Math.sin(i / 144 * Math.PI * 2)
    const daily = Math.sin(i / 24 * Math.PI * 2) * 5
    const noise = (Math.random() - 0.5) * 10
    hours.push({
      time: label,
      cpu_user: +(38 + wave * 14 + daily + noise).toFixed(1),
      cpu_sys: +(12 + wave * 6 + daily * 0.4 + noise * 0.5).toFixed(1),
    })
  }
  return hours
}

/** 各主机内存使用 */
export async function fetchMemoryUsage() {
  await delay(220)
  const hosts = [
    'prod-web-01', 'prod-web-02', 'prod-web-03',
    'db-master-01', 'db-slave-01', 'db-slave-02',
    'cache-redis-01', 'cache-redis-02',
    'mq-kafka-01', 'ai-gpu-01',
  ]
  return hosts.map((name) => ({
    hostname: name,
    mem_used: +(45 + Math.random() * 42).toFixed(1),
    mem_total: 128,
    type: name.startsWith('db') ? 'database'
         : name.startsWith('cache') ? 'cache'
         : name.startsWith('mq') ? 'message'
         : name.startsWith('ai') ? 'gpu'
         : 'application',
  }))
}

/** 最近告警 */
export async function fetchAlerts() {
  await delay(240)
  return [
    {
      id: 1, time: '2026-07-14 14:32:10', hostname: 'db-master-01',
      type: 'CPU', level: 'critical',
      message: 'CPU 使用率超过 95%，持续 5 分钟', value: '97.3%',
    },
    {
      id: 2, time: '2026-07-14 13:18:45', hostname: 'cache-redis-02',
      type: 'Memory', level: 'warning',
      message: '内存使用率超过 85% 阈值', value: '88.6%',
    },
    {
      id: 3, time: '2026-07-14 11:05:22', hostname: 'prod-web-03',
      type: 'Disk', level: 'warning',
      message: '磁盘 I/O 延迟异常，avg &gt; 200ms', value: '234ms',
    },
    {
      id: 4, time: '2026-07-14 09:47:08', hostname: 'ai-gpu-01',
      type: 'GPU', level: 'info',
      message: 'GPU 显存使用率达到 80%', value: '81.2%',
    },
    {
      id: 5, time: '2026-07-13 22:15:33', hostname: 'mq-kafka-01',
      type: 'Network', level: 'info',
      message: '网络入站流量突增，超过基线 200%', value: '3.2 Gbps',
    },
  ]
}
