import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import { getDevices } from '../lib/mock-data'

export default function DevicesPage() {
  const devices = getDevices()

  return (
    <div className="app-shell">
      <Sidebar />

      <main className="content">
        <Topbar title="Devices" subtitle="Monitoring hardware and connectivity" />

        <section className="panel">
          <div className="page-header">
            <h2>Connected devices</h2>
            <p>Device health, battery level, and site status.</p>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Location</th>
                <th>Status</th>
                <th>Battery</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device) => (
                <tr key={device.id}>
                  <td>{device.id}</td>
                  <td>{device.location}</td>
                  <td>
                    <span className={`badge ${device.status === 'online' ? 'ok' : device.status === 'warning' ? 'warning' : 'danger'}`}>
                      {device.status}
                    </span>
                  </td>
                  <td>{device.battery}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}
