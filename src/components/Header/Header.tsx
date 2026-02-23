import { useNavigate, useLocation } from 'react-router-dom';
import type { User } from '@/types/content';
import { IconMenu, IconSearch, IconBell } from '@/icons';
import { TabsMui } from '@/components/Header/TabsMui';
import './Header.scss';

const dataTabs = [
  { value: '/', label: 'Home' },
  { value: '/content-library', label: 'Content Library' },
  { value: '/templates', label: 'Templates' },
  { value: '/meeting-workspace', label: 'Meeting Workspace' },
  { value: '/my-books', label: 'My Books' },
  { value: '/admin', label: 'Admin' },
];

function getTabValue(pathname: string): string {
  const exact = dataTabs.find((l) => l.value === pathname);
  if (exact) return exact.value;
  const prefix = dataTabs.find((l) => l.value !== '/' && pathname.startsWith(l.value));
  return prefix?.value ?? pathname;
}

interface HeaderProps {
  user: User | null;
}

export const Header = ({ user }: HeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const tabValue = getTabValue(location.pathname);

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
        <TabsMui
          value={tabValue}
          onChange={(newValue: string) => navigate(newValue)}
          dataTabs={dataTabs}
        />

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
