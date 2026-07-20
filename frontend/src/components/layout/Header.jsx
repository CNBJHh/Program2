import { RefreshCw, Bell } from 'lucide-react'
import { useClock } from '../../hooks'
import config from '../../config'
import { eventBus } from '../../core/EventBus'

/** 如意 Logo SVG */
function Logo() {
  return (
    <svg className="header__logo" viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="18" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
      <path
        d="M11 26 C9 22 13 12 20 12 C27 12 31 22 29 26 C27 22 23 19 20 19 C17 19 13 22 11 26Z"
        fill="url(#logoGrad)"
        opacity="0.9"
      />
      <circle cx="20" cy="20" r="2.5" fill="white" opacity="0.9" />
      <circle cx="12.5" cy="26" r="1.5" fill="white" opacity="0.6" />
      <circle cx="27.5" cy="26" r="1.5" fill="white" opacity="0.6" />
      {/* 科技节点连线 */}
      <line x1="20" y1="20" x2="12.5" y2="26" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
      <line x1="20" y1="20" x2="27.5" y2="26" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
    </svg>
  )
}

export default function Header() {
  const { format: fmt } = useClock()

  const handleRefresh = () => {
    eventBus.emit('dashboard:refresh')
  }

  return (
    <header className="header">
      <div className="header__left">
        <Logo />
        <h1 className="header__title">
          {config.app.name}
          <span>· {config.app.subtitle}</span>
        </h1>
      </div>

      <div className="header__right">
        <button className="header__action" onClick={handleRefresh} title="刷新数据">
          <RefreshCw size={14} />
          <span>刷新</span>
        </button>

        <span className="header__time">
          {fmt.date} {fmt.weekday} {fmt.clock}
        </span>

        <button className="header__action" title="通知">
          <Bell size={16} />
        </button>

        <div className="header__avatar">管</div>
      </div>
    </header>
  )
}
