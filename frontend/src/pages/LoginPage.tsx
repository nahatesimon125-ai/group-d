import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    localStorage.setItem('auth_token', 'demo-token')
    navigate('/')
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>NeoGuard</h2>
        <p>Clinical monitoring dashboard</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Username</label>
            <input id="email" type="text" defaultValue="admin" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" defaultValue="demo" />
          </div>

          <button type="submit" className="primary-btn">Sign in</button>
        </form>
      </div>
    </div>
  )
}
