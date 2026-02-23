import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { tabsSx, tabSx } from './TabsMui.styles';

interface DataTabs {
  value: string;
  label: string;
}

interface TabsMuiProps {
  value: string;
  onChange: (newValue: string) => void;
  dataTabs: DataTabs[];
  enableIndicatorAnimation?: boolean;
  color?: string;
}

export const TabsMui = ({
  value,
  onChange,
  dataTabs,
  enableIndicatorAnimation = false,
  color,
}: TabsMuiProps) => (
  <Tabs
    value={value}
    onChange={(_, newValue: string) => onChange(newValue)}
    variant="scrollable"
    scrollButtons="auto"
    sx={[
      tabsSx,
      ...(color ? [{ backgroundColor: color }] : []),
      ...(enableIndicatorAnimation ? [] : [{ '& .MuiTabs-indicator': { transition: 'none' } }]),
    ]}
    // className="header-tabs"
  >
    {dataTabs.map(({ value, label }) => (
      <Tab
        key={value}
        value={value}
        label={label}
        sx={[tabSx, ...(enableIndicatorAnimation ? [] : [{ transition: 'none' }])]}
        disableRipple
        disableFocusRipple
      />
    ))}
  </Tabs>
);
