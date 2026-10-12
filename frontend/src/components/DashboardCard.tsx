type DashboardCardProps = {
  title: string
  value: number | string
  tone?: 'ok' | 'warning' | 'danger' | 'info'
}

export default function DashboardCard({ title, value, tone = 'info' }: DashboardCardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className={`metric badge ${tone}`}>{value}</p>
    </div>
  )
}
