import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import type { SxProps, Theme } from '@mui/material/styles';

interface NavLink {
  to: string;
  label: string;
}

interface TabsMuiProps {
  value: string;
  onChange: (newValue: string) => void;
  links: NavLink[];
  tabsSx: SxProps<Theme>;
  tabSx: SxProps<Theme>;
}

export const TabsMui = ({ value, onChange, links, tabsSx, tabSx }: TabsMuiProps) => (
  <Tabs
    value={value}
    onChange={(_, newValue: string) => onChange(newValue)}
    variant="scrollable"
    scrollButtons="auto"
    sx={tabsSx}
    className="header-tabs"
  >
    {links.map(({ to, label }) => (
      <Tab key={to} value={to} label={label} sx={tabSx} />
    ))}
  </Tabs>
);
