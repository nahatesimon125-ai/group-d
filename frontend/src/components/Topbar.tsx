type TopbarProps = {
  title: string
  subtitle: string
}

export default function Topbar({ title, subtitle }: TopbarProps) {
  return (
    <header className="topbar">
      <div>
        <h1>{title}</h1>
        <small>{subtitle}</small>
      </div>
      <span className="badge info">Live</span>
    </header>
  )
}
