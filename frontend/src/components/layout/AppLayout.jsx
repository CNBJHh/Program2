import Header from './Header'
import Sidebar from './Sidebar'

/**
 * AppLayout — 应用主布局
 * Fixed Header + Fixed Sidebar + Scrollable Content
 */
export default function AppLayout({ children }) {
  return (
    <div className="app-shell">
      <Header />
      <Sidebar />
      <main className="content">
        <div className="content__inner">
          {children}
        </div>
      </main>
    </div>
  )
}
