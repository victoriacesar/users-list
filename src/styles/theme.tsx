import { PaletteMode, ThemeOptions } from '@mui/material';
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
  },
});
