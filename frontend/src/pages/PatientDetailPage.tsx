import { ArrowLeft, AlertTriangle, Activity, HeartPulse, Stethoscope } from 'lucide-react'
import { Link } from 'react-router-dom'
import { patientDetail } from '../lib/mock-data'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const chartData = [
  { time: '00', hr: 125, spo2: 96 },
  { time: '02', hr: 132, spo2: 95 },
  { time: '04', hr: 138, spo2: 93 },
  { time: '06', hr: 148, spo2: 91 },
  { time: '08', hr: 146, spo2: 92 },
  { time: '10', hr: 141, spo2: 94 },
  { time: '12', hr: 136, spo2: 96 },
]

export default function PatientDetailPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <Link to="/patients" className="btn-secondary inline-flex gap-2">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <span className="badge badge-warning">{patientDetail.status}</span>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr,0.8fr]">
          <section className="card p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-slate-500">Patient</p>
                <h2 className="text-3xl font-bold text-slate-900">{patientDetail.name}</h2>
              </div>
              <div className="rounded-2xl bg-blue-50 px-4 py-3 text-sm text-blue-700">
                {patientDetail.babyCode} • {patientDetail.room}
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {patientDetail.vitals.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-500">{metric.label}</p>
                  <p className="mt-2 text-xl font-bold text-slate-900">{metric.value}</p>
                  <span className={`mt-3 inline-flex rounded-full px-2 py-1 text-[10px] font-semibold ${metric.status === 'watch' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                    {metric.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-3 flex items-center gap-2 text-slate-800">
                <HeartPulse className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold">Heart rate and blood oxygen trend</h3>
              </div>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="hrFill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.04} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#e2e8f0" vertical={false} />
                    <XAxis dataKey="time" stroke="#94a3b8" tickLine={false} axisLine={false} />
                    <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="hr" stroke="#2563eb" fill="url(#hrFill)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="card p-5">
              <div className="mb-3 flex items-center gap-2 text-slate-800">
                <Stethoscope className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold">Clinical summary</h3>
              </div>
              <dl className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-between"><dt>Age</dt><dd className="font-medium text-slate-900">{patientDetail.age}</dd></div>
                <div className="flex items-center justify-between"><dt>Consultant</dt><dd className="font-medium text-slate-900">{patientDetail.consultant}</dd></div>
                <div className="flex items-center justify-between"><dt>Observed</dt><dd className="font-medium text-slate-900">12 min ago</dd></div>
              </dl>
            </div>

            <div className="card p-5">
              <div className="mb-4 flex items-center gap-2 text-slate-800">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <h3 className="text-lg font-semibold">Active alerts</h3>
              </div>
              <div className="space-y-3">
                {patientDetail.alerts.map((alert) => (
                  <div key={alert.title} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <p className="font-medium text-slate-800">{alert.title}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className={`badge ${alert.severity === 'warning' ? 'badge-warning' : 'badge-info'}`}>{alert.severity}</span>
                      <span className="text-xs text-slate-500">{alert.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
