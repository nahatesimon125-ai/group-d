import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

export default function AdminPage() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="content">
        <Topbar title="Admin" subtitle="System administration and configuration" />

        <section className="panel">
          <div className="page-header">
            <h2>Administration</h2>
            <p>Manage thresholds, users, and model configuration.</p>
          </div>

          <div className="card-grid">
            <div className="card">
              <h3>Thresholds</h3>
              <p className="metric">12</p>
            </div>
            <div className="card">
              <h3>Staff users</h3>
              <p className="metric">19</p>
            </div>
            <div className="card">
              <h3>Model version</h3>
              <p className="metric">v2.4</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
