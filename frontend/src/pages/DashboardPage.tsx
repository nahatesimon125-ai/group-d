import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import DashboardCard from '../components/DashboardCard'
import { getDashboardMetrics } from '../lib/mock-data'

export default function DashboardPage() {
  const metrics = getDashboardMetrics()

  return (
    <div className="app-shell">
      <Sidebar />

      <main className="content">
        <Topbar title="Overview" subtitle="System health and patient status" />

        <div className="card-grid">
          {metrics.map((metric) => (
            <DashboardCard
              key={metric.title}
              title={metric.title}
              value={metric.value}
              tone={metric.tone}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
