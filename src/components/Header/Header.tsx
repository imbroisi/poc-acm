import { Link, useLocation } from 'react-router-dom'
import type { User } from '@/types/content'
import { IconMenu, IconSearch, IconBell } from '@/icons'
import './Header.scss'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/content-library', label: 'Content Library' },
  { to: '/templates', label: 'Templates' },
  { to: '/meeting-workspace', label: 'Meeting Workspace' },
  { to: '/my-books', label: 'My Books' },
  { to: '/admin', label: 'Admin' },
]

interface HeaderProps {
  user: User | null
}

export const Header = ({ user }: HeaderProps) => {
  const location = useLocation()

  return (
    <header className="header">
      <div className="left">
        <button type="button" className="menu" aria-label="Menu">
          <IconMenu />
        </button>
        <span className="logo">CLIENT MATERIALS</span>
      </div>
      <nav className="nav">
        {NAV_LINKS.map(({ to, label }) => (
          <Link key={to} to={to} className={`link ${location.pathname === to ? 'active' : ''}`}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="right">
        <button type="button" className="btn">
          <span className="btn-icon">+</span>
          Create Blank
        </button>
        <button type="button" className="icon" aria-label="Search">
          <IconSearch />
        </button>
        <button type="button" className="icon" aria-label="Notifications">
          <IconBell />
        </button>
        <div className="user" title={user?.name}>
          <span className="avatar">{user?.name?.charAt(0) ?? 'U'}</span>
        </div>
      </div>
    </header>
  )
}
