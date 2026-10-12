import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Dashboard' },
  { to: '/patients', label: 'Patients' },
  { to: '/devices', label: 'Devices' },
  { to: '/alerts', label: 'Alerts' },
  { to: '/admin', label: 'Admin' },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="sidebar-brand">NeoGuard</h1>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
