import { IconSearch, IconFilter } from '@/icons'
import './WelcomeArea.scss'

interface WelcomeAreaProps {
  userName: string
}

export const WelcomeArea = ({ userName }: WelcomeAreaProps) => {
  return (
    <section className="welcome">
      <h1 className="title">Welcome to Client Materials, {userName}!</h1>
      <div className="search-wrap">
        <div className="search">
          <IconSearch className="search-icon" />
          <input type="search" className="input" placeholder="Search..." aria-label="Search" />
          <button type="button" className="filter" aria-label="Filter">
            <IconFilter />
          </button>
        </div>
      </div>
      <div className="decor" aria-hidden>
        <div className="nodes" />
      </div>
    </section>
  )
}
