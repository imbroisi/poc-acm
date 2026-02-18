import { useNavigate, useLocation } from 'react-router-dom';
import type { User } from '@/types/content';
import { IconMenu, IconSearch, IconBell } from '@/icons';
import { CaTab } from './CaTab';
import { CaTabs } from './CaTabs';
import './Header.scss';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/content-library', label: 'Content Library' },
  { to: '/templates', label: 'Templates' },
  { to: '/meeting-workspace', label: 'Meeting Workspace' },
  { to: '/my-books', label: 'My Books' },
  { to: '/admin', label: 'Admin' },
];

function getTabValue(pathname: string): string {
  const exact = NAV_LINKS.find((l) => l.to === pathname);
  if (exact) return exact.to;
  const prefix = NAV_LINKS.find((l) => l.to !== '/' && pathname.startsWith(l.to));
  return prefix?.to ?? pathname;
}

interface HeaderProps {
  user: User | null;
}

export const Header = ({ user }: HeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const tabValue = getTabValue(location.pathname);

  console.log('tabValue', tabValue);

  return (
    <header className="header">
      <div className="header-top-strip" />
      <div className="header-main">
        <div className="left">
          <button type="button" className="menu" aria-label="Menu">
            <IconMenu />
          </button>
          <span className="logo">CLIENT MATERIALS</span>
        </div>
        <CaTabs
          value={tabValue}
          onChange={(_, newValue) => navigate(newValue)}
          className="header-tabs"
        >
          {NAV_LINKS.map(({ to, label }) => (
            <CaTab key={to} value={to} label={label} />
          ))}
        </CaTabs>
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
      </div>
    </header>
  );
};
