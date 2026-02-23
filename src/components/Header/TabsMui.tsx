import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import type { SxProps, Theme } from '@mui/material/styles';

interface DataTabs {
  value: string;
  label: string;
}

interface TabsMuiProps {
  value: string;
  onChange: (newValue: string) => void;
  dataTabs: DataTabs[];
  enableIndicatorAnimation?: boolean;
}

const tabsSx: SxProps<Theme> = {
  flex: 1,
  minHeight: 40,
  height: 40,
  '& .MuiTabs-flexContainer': {
    gap: 0,
  },
  '& .MuiTabs-indicator': {
    backgroundColor: '#fff',
    height: 4,
  },
  '& .MuiTabs-scroller': {
    flex: 1,
  },
};

const tabSx: SxProps<Theme> = {
  color: 'rgba(255,255,255,0.95)',
  fontWeight: 500,
  fontSize: '0.875rem',
  textTransform: 'none',
  minHeight: 40,
  height: 40,
  paddingTop: 0,
  paddingBottom: 0,
  '& .MuiTab-wrapper': {
    lineHeight: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'inline-flex',
  },
  '&.Mui-selected': {
    color: '#fff',
    backgroundColor: '#2f59a6',
  },
};

export const TabsMui = ({
  value,
  onChange,
  dataTabs,
  enableIndicatorAnimation = false,
}: TabsMuiProps) => (
  <Tabs
    value={value}
    onChange={(_, newValue: string) => onChange(newValue)}
    variant="scrollable"
    scrollButtons="auto"
    sx={[
      tabsSx,
      !enableIndicatorAnimation && {
        '& .MuiTabs-indicator': {
          transition: 'none',
        },
      },
    ]}
    className="header-tabs"
  >
    {dataTabs.map(({ value, label }) => (
      <Tab
        key={value}
        value={value}
        label={label}
        sx={[tabSx, !enableIndicatorAnimation && { transition: 'none' }]}
        disableRipple
        disableFocusRipple
      />
    ))}
  </Tabs>
);
