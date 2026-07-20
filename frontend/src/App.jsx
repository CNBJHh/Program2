import { AppLayout } from './components/layout'
import { ParticleBg } from './components/dashboard'
import Dashboard from './pages/Dashboard'
import config from './config'

export default function App() {
  return (
    <AppLayout>
      {config.theme.particles && <ParticleBg />}
      <Dashboard />
    </AppLayout>
  )
}
