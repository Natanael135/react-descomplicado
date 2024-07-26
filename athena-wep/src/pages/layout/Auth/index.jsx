import { Outlet } from 'react-router-dom'

import './styles.css'

function AuthLayout() {
  return (
    <div className="auth-layout">
      <Outlet />
    </div>
  )
}

export default AuthLayout