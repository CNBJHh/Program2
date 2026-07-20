import {
  LayoutDashboard, Monitor, Activity, Bell,
  FileText, Settings, HelpCircle, ChevronDown,
} from 'lucide-react'

const menuGroups = [
  {
    title: '主菜单',
    items: [
      { icon: LayoutDashboard, label: '仪表盘', active: true },
      { icon: Monitor, label: '主机管理' },
      { icon: Activity, label: '监控指标', badge: 12 },
      { icon: Bell, label: '告警中心', badge: 3 },
    ],
  },
  {
    title: '管理',
    items: [
      { icon: FileText, label: '日志审计' },
      { icon: Settings, label: '系统设置' },
    ],
  },
]

/** 祥云装饰 SVG */
function RuyiClouds() {
  return (
    <svg className="sidebar__ruyi-decor" viewBox="0 0 220 36" fill="none">
      <path
        d="M10 28 C20 16 50 12 75 17 C100 12 125 16 135 28 C125 22 100 19 75 21 C50 19 25 22 10 28Z"
        fill="var(--blue-600)"
        opacity="0.4"
      />
      <path
        d="M80 28 C92 14 120 10 150 15 C175 10 200 15 215 28 C205 22 185 19 150 21 C120 19 95 22 80 28Z"
        fill="var(--cyan-500)"
        opacity="0.3"
      />
    </svg>
  )
}

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        {menuGroups.map((group) => (
          <div key={group.title}>
            <div className="sidebar__section">{group.title}</div>
            {group.items.map((item) => (
              <div
                key={item.label}
                className={`sidebar__item ${item.active ? 'sidebar__item--active' : ''}`}
              >
                <item.icon />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="sidebar__badge">{item.badge}</span>
                )}
              </div>
            ))}
          </div>
        ))}

        <div style={{ marginTop: 12 }}>
          <div className="sidebar__section">其他</div>
          <div className="sidebar__item">
            <HelpCircle />
            <span>帮助文档</span>
          </div>
        </div>
      </nav>

      <div className="sidebar__footer">
        <RuyiClouds />
        <div style={{
          textAlign: 'center',
          fontSize: 'var(--font-size-xs)',
          color: 'var(--text-tertiary)',
          marginTop: 8,
        }}>
          如意 v{import.meta.env.VITE_APP_VERSION || '2.0'}
        </div>
      </div>
    </aside>
  )
}
