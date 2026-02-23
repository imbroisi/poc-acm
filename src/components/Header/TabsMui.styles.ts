import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

export const tabsSx: SystemStyleObject<Theme> = {
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

export const tabSx: SystemStyleObject<Theme> = {
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
