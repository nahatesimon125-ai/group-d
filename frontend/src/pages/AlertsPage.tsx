import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import { getAlerts } from '../lib/mock-data'

export default function AlertsPage() {
  const alerts = getAlerts()

  return (
    <div className="app-shell">
      <Sidebar />

      <main className="content">
        <Topbar title="Alerts" subtitle="Clinical and device alerts" />

        <section className="panel">
          <div className="page-header">
            <h2>Recent alerts</h2>
            <p>Priority monitoring events requiring a response.</p>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Patient</th>
                <th>Severity</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert) => (
                <tr key={alert.id}>
                  <td>{alert.type}</td>
                  <td>{alert.patient}</td>
                  <td>
                    <span className={`badge ${alert.severity === 'warning' ? 'warning' : alert.severity === 'danger' ? 'danger' : 'info'}`}>
                      {alert.severity}
                    </span>
                  </td>
                  <td>{alert.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}
