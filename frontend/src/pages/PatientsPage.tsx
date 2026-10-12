import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import { getPatients } from '../lib/mock-data'

export default function PatientsPage() {
  const patients = getPatients()

  return (
    <div className="app-shell">
      <Sidebar />

      <main className="content">
        <Topbar title="Patients" subtitle="Neonatal patient monitoring" />

        <section className="panel">
          <div className="page-header">
            <h2>Current patients</h2>
            <p>Latest clinical status and monitoring updates.</p>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Room</th>
                <th>Status</th>
                <th>Last updated</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.name}</td>
                  <td>{patient.room}</td>
                  <td>
                    <span className={`badge ${patient.status === 'At risk' ? 'warning' : 'ok'}`}>
                      {patient.status}
                    </span>
                  </td>
                  <td>{patient.lastUpdated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}
