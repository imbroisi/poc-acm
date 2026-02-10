import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { ChatWidget } from '@/components/ChatWidget'
import type { User } from '@/types/content'
import './Layout.scss'

interface LayoutProps {
  user: User | null
  children?: React.ReactNode
}

export const Layout = ({ user, children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header user={user} />
      <main className="main">{children ?? <Outlet />}</main>
      <ChatWidget />
    </div>
  )
}
