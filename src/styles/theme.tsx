import { PaletteMode, tableCellClasses, ThemeOptions } from '@mui/material';
import { amber, blueGrey, grey, red } from '@mui/material/colors';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  typography: {
    fontFamily: 'Lato, sans-serif',
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: grey,
          divider: amber[200],
          colorOptions: {
            lightGray: '#9D9D9D',
            middleGray: '#6A6A6A',
            darkGray: '#515151',
            purple: '#9747FF',
            oppositeColor: '#ffffff',
            red: red[500],
            active: '#0AB24326',
            inactive: '#E53E3E1A',
            activeText: '#46855B',
            inactiveText: '#E53E3E',
            border: '#E2E2E2',
          },
          background: {
            default: grey[50],
          },
        }
      : {
          // palette values for dark mode
          primary: blueGrey,
          divider: blueGrey[900],
          background: {
            default: grey[900],
          },
          colorOptions: {
            lightGray: grey[50],
            middleGray: grey[100],
            darkGray: grey[100],
            purple: '#9747FF',
            oppositeColor: '#ffffff',
            red: red[500],
            active: '#0AB24326',
            inactive: '#E53E3E1A',
            activeText: '#46855B',
            inactiveText: '#E53E3E',
            border: '#E2E2E2',
          },
        }),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Lato';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        }
      `,
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '--TextField-brandBorderColor': '#C4C4C4',
          '--TextField-brandBorderHoverColor': '#757575',
          '--TextField-brandBorderFocusedColor': '#0c6cbc',
          '--TextField-errorFocusedColor': red[500],
          '& label.Mui-focused': {
            color: 'var(--TextField-brandBorderFocusedColor)',
          },
          '& label.Mui-error': {
            color: 'var(--TextField-errorFocusedColor)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'var(--TextField-brandBorderColor)',
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'var(--TextField-brandBorderHoverColor)',
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'var(--TextField-brandBorderFocusedColor)',
          },
          [`&.Mui-error .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'var(--TextField-errorFocusedColor)',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          ['& .MuiTabs-indicator']: {
            backgroundColor: '#9747FF',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          marginTop: '12px',
          textTransform: 'none',
          [`&:hover`]: {
            color: '#9747FF',
          },
          ['&.Mui-selected']: {
            borderColor: '#9747FF',
            color: '#9747FF',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #E2E2E2',
          [`&.${tableCellClasses.head}`]: {
            width: '100px',
          },
          [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
          },
        },
      },
    },
  },
});
