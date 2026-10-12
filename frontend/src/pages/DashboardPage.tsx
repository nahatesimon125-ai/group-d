import { AlertTriangle, Activity, HeartPulse, ShieldCheck, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { patients, metrics, trendData } from '../lib/mock-data'
import { AreaChart, Area, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 lg:flex-row">
      <aside className="w-full bg-slate-900 p-5 text-slate-100 lg:max-w-[240px] lg:min-h-screen">
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold">N</div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Clinical</p>
              <h1 className="text-xl font-bold">NeoGuard</h1>
            </div>
          </div>
        </div>

        <nav className="space-y-2">
          {[
            { to: '/', label: 'Dashboard', icon: Activity },
            { to: '/patients', label: 'Patients', icon: UserRound },
            { to: '/devices', label: 'Devices', icon: ShieldCheck },
            { to: '/alerts', label: 'Alerts', icon: AlertTriangle },
          ].map(({ to, label, icon: Icon }) => (
            <Link key={to} to={to} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white">
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <header className="mb-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-clinical sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Overview</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">Clinical dashboard</h2>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">Live</span>
            <span>Updated 2 min ago</span>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.title} className="card p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-xl bg-blue-50 p-2.5 text-blue-700">
                  {metric.title === 'Patients monitored' && <UserRound className="h-5 w-5" />}
                  {metric.title === 'Active sessions' && <Activity className="h-5 w-5" />}
                  {metric.title === 'Devices online' && <ShieldCheck className="h-5 w-5" />}
                  {metric.title === 'Alerts today' && <AlertTriangle className="h-5 w-5" />}
                </div>
                <span className="text-xs text-slate-500">{metric.detail}</span>
              </div>
              <p className="text-sm text-slate-500">{metric.title}</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{metric.value}</p>
            </div>
          ))}
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.7fr,0.9fr]">
          <div className="card p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Vital trends</h3>
                <p className="text-sm text-slate-500">Heart rate, oxygen saturation, temperature</p>
              </div>
              <button className="btn-secondary">Export</button>
            </div>

            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="hr" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#e2e8f0" vertical={false} />
                  <XAxis dataKey="time" stroke="#94a3b8" tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="heartRate" stroke="#3b82f6" fill="url(#hr)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card p-5">
            <h3 className="text-lg font-semibold text-slate-900">Priority alerts</h3>
            <div className="mt-4 space-y-3">
              {[
                { label: 'Low SpO₂', detail: 'Baby B-118', severity: 'warning' },
                { label: 'Sensor drift', detail: 'Baby C-317', severity: 'danger' },
                { label: 'Battery low', detail: 'Device D-07', severity: 'info' },
              ].map((alert) => (
                <div key={alert.label} className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
                  <div>
                    <p className="font-medium text-slate-800">{alert.label}</p>
                    <p className="text-sm text-slate-500">{alert.detail}</p>
                  </div>
                  <span className={`badge ${alert.severity === 'warning' ? 'badge-warning' : alert.severity === 'danger' ? 'badge-danger' : 'badge-info'}`}>
                    {alert.severity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 card p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Patient roster</h3>
              <p className="text-sm text-slate-500">Current neonatal cases under observation</p>
            </div>
            <button className="btn-primary">Add patient</button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="py-3 pr-6">Patient</th>
                  <th className="py-3 pr-6">Room</th>
                  <th className="py-3 pr-6">Status</th>
                  <th className="py-3 pr-6">Heart rate</th>
                  <th className="py-3 pr-6">SpO₂</th>
                  <th className="py-3 pr-6">Temperature</th>
                  <th className="py-3 pr-6">Updated</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id} className="border-b border-slate-100 last:border-b-0">
                    <td className="py-3 pr-6">
                      <Link to={`/patients/${patient.id}`} className="font-medium text-blue-700 hover:text-blue-900">
                        {patient.name}
                      </Link>
                    </td>
                    <td className="py-3 pr-6">{patient.room}</td>
                    <td className="py-3 pr-6">
                      <span className={`badge ${patient.status === 'Stable' ? 'badge-ok' : patient.status === 'At risk' ? 'badge-warning' : 'badge-danger'}`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="py-3 pr-6">{patient.hr} bpm</td>
                    <td className="py-3 pr-6">{patient.spo2}%</td>
                    <td className="py-3 pr-6">{patient.temp}°C</td>
                    <td className="py-3 pr-6">{patient.lastUpdated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}
