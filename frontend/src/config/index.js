/**
 * 全局应用配置
 * 修改此文件即可快速适配不同项目
 */
const config = {
  // 应用信息
  app: {
    name: '如意 Admin',
    subtitle: '智能管理平台',
    version: '2.0.0',
  },

  // 布局
  layout: {
    headerHeight: 64,
    sidebarWidth: 252,
    sidebarCollapsed: false,
  },

  // 主题
  theme: {
    name: 'ruyi-tech-blue',
    mode: 'dark',        // 'dark' | 'light'
    glassmorphism: true,
    particles: true,
    animations: true,
  },

  // API
  api: {
    baseURL: '/api',
    timeout: 10000,
    mockEnabled: true,   // true = 使用 mock 数据
  },

  // 仪表盘
  dashboard: {
    refreshInterval: 30_000,  // 自动刷新间隔 (ms)
    cpuHistoryDays: 7,
  },
}

export default config
