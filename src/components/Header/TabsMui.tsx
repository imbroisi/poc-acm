import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './TabsMui.scss';

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
  selectedColor?: string;
}

export const TabsMui = ({
  value,
  onChange,
  dataTabs,
  enableIndicatorAnimation = false,
  color,
  selectedColor,
}: TabsMuiProps) => (
  <Tabs
    value={value}
    onChange={(_, newValue: string) => onChange(newValue)}
    variant="scrollable"
    scrollButtons="auto"
    className="tabs-mui"
    sx={[
      ...(color ? [{ color }] : []),
      ...(enableIndicatorAnimation ? [] : [{ '& .MuiTabs-indicator': { transition: 'none' } }]),
    ]}
  >
    {dataTabs.map(({ value, label }) => (
      <Tab
        key={value}
        value={value}
        label={label}
        className="tabs-mui-tab"
        sx={[
          ...(enableIndicatorAnimation ? [] : [{ transition: 'none' }]),
          ...(selectedColor ? [{ '&.Mui-selected': { backgroundColor: selectedColor } }] : []),
        ]}
        disableRipple
        disableFocusRipple
      />
    ))}
  </Tabs>
);
