import { Activity, AlertTriangle, ArrowRight, Bell, Clock3, HeartPulse, ShieldCheck, Stethoscope, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'

export type Patient = {
  id: number
  name: string
  babyCode: string
  room: string
  status: 'Stable' | 'At risk' | 'Critical'
  age: string
  consultant: string
  lastUpdated: string
  trend: 'improving' | 'monitoring' | 'alert'
  hr: number
  spo2: number
  temp: number
}

export const patients: Patient[] = [
  { id: 1, name: 'Ava Thompson', babyCode: 'B-204', room: 'NICU-2', status: 'Stable', age: '3 days', consultant: 'Dr. Kim', lastUpdated: '2 min ago', trend: 'improving', hr: 132, spo2: 97, temp: 36.8 },
  { id: 2, name: 'Leo Martinez', babyCode: 'B-118', room: 'NICU-1', status: 'At risk', age: '5 days', consultant: 'Dr. Nwosu', lastUpdated: '1 min ago', trend: 'monitoring', hr: 148, spo2: 91, temp: 37.1 },
  { id: 3, name: 'Mila Jones', babyCode: 'B-317', room: 'Delivery', status: 'Critical', age: '1 day', consultant: 'Dr. Shah', lastUpdated: 'Now', trend: 'alert', hr: 165, spo2: 88, temp: 38.3 },
  { id: 4, name: 'Noah Singh', babyCode: 'B-452', room: 'NICU-3', status: 'Stable', age: '7 days', consultant: 'Dr. Patel', lastUpdated: '7 min ago', trend: 'improving', hr: 124, spo2: 96, temp: 36.9 },
]

export const metrics = [
  { title: 'Patients monitored', value: '148', detail: '+12 this week', icon: UserRound, tone: 'info' },
  { title: 'Active sessions', value: '29', detail: '5 high priority', icon: Activity, tone: 'ok' },
  { title: 'Devices online', value: '17/19', detail: '2 offline', icon: ShieldCheck, tone: 'warning' },
  { title: 'Alerts today', value: '4', detail: '1 critical', icon: Bell, tone: 'danger' },
]

export const trendData = [
  { time: '00:00', heartRate: 126, spo2: 95, temperature: 36.7 },
  { time: '02:00', heartRate: 129, spo2: 94, temperature: 36.8 },
  { time: '04:00', heartRate: 136, heartRate2: 136, spo2: 92, temperature: 36.6 },
  { time: '06:00', heartRate: 141, spo2: 91, temperature: 36.7 },
  { time: '08:00', heartRate: 138, spo2: 93, temperature: 36.8 },
  { time: '10:00', heartRate: 147, spo2: 90, temperature: 37.0 },
  { time: '12:00', heartRate: 142, spo2: 92, temperature: 36.9 },
]

export const patientDetail = {
  id: 2,
  name: 'Leo Martinez',
  babyCode: 'B-118',
  status: 'At risk',
  age: '5 days',
  room: 'NICU-1',
  consultant: 'Dr. Nwosu',
  vitals: [
    { label: 'Heart rate', value: '148 bpm', status: 'watch' },
    { label: 'SpO₂', value: '91%', status: 'watch' },
    { label: 'Temperature', value: '37.1°C', status: 'stable' },
    { label: 'Respiration', value: '44/min', status: 'watch' },
  ],
  alerts: [
    { title: 'Low oxygen saturation trend', severity: 'warning', time: '1 min ago' },
    { title: 'Device sync delay', severity: 'info', time: '6 min ago' },
  ],
}

export function Sidebar() {
  const items = [
    { to: '/', label: 'Dashboard', icon: Activity },
    { to: '/patients', label: 'Patients', icon: UserRound },
    { to: '/devices', label: 'Devices', icon: ShieldCheck },
    { to: '/alerts', label: 'Alerts', icon: Bell },
    { to: '/admin', label: 'Admin', icon: Stethoscope },
  ]

  return (
    <aside className="flex w-full max-w-[240px] flex-col bg-slate-900 p-5 text-slate-100 lg:min-h-screen">
      <div className="mb-10">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">N</div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Clinical</p>
            <h1 className="text-xl font-bold">NeoGuard</h1>
          </div>
        </div>
      </div>

      <nav className="space-y-2">
        {items.map(({ to, label, icon: Icon }) => (
          <NavItem key={to} to={to} label={label} Icon={Icon} />
        ))}
      </nav>

      <div className="mt-auto rounded-2xl border border-slate-700 bg-slate-800 p-4">
        <div className="mb-2 flex items-center gap-2 text-sm text-slate-300">
          <HeartPulse className="h-4 w-4 text-emerald-400" />
          Live monitoring
        </div>
        <p className="text-xs text-slate-400">System status nominal</p>
      </div>
    </aside>
  )
}

function NavItem({ to, label, Icon }: { to: string; label: string; Icon: typeof Activity }) {
  return (
    <Link
      to={to}
      className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-slate-300 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white"
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  )
}

export function Topbar({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="mb-6 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-clinical">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Monitoring</p>
        <h2 className="mt-1 text-2xl font-bold text-slate-900">{title}</h2>
      </div>
      <div className="flex items-center gap-3">
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">Live</span>
        <div className="text-right text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4" />
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
          <p className="mt-0.5">{subtitle}</p>
        </div>
      </div>
    </header>
  )
}

export function MetricCard({ title, value, detail, tone, icon: Icon }: { title: string; value: string; detail: string; tone: 'info' | 'ok' | 'warning' | 'danger'; icon: typeof Activity }) {
  const toneClasses = {
    info: 'bg-blue-50 text-blue-700',
    ok: 'bg-emerald-50 text-emerald-700',
    warning: 'bg-amber-50 text-amber-700',
    danger: 'bg-red-50 text-red-700',
  }

  return (
    <div className="card p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${toneClasses[tone]}`}>
          <Icon className="h-5 w-5" />
        </span>
        <span className="text-xs font-medium text-slate-500">{detail}</span>
      </div>
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
    </div>
  )
}

export const alertStyles: Record<string, string> = {
  Stable: 'badge badge-ok',
  'At risk': 'badge badge-warning',
  Critical: 'badge badge-danger',
}

export function StatusBadge({ value }: { value: string }) {
  const className = alertStyles[value] || 'badge badge-info'
  return <span className={className}>{value}</span>
}

export function formatDate(value: string) {
  return new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}
