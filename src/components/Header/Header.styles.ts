import type { SxProps, Theme } from '@mui/material/styles';

export const TAB_ACTIVE_BG = '#2f59a6';

export const headerTabsSx: SxProps<Theme> = {
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

export const headerTabSx: SxProps<Theme> = {
  color: 'rgba(255,255,255,0.95)',
  textTransform: 'uppercase',
  fontWeight: 500,
  fontSize: '0.875rem',
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
    backgroundColor: TAB_ACTIVE_BG,
  },
};
