import { PaletteMode } from '@mui/material';
import { amber, blueGrey, grey } from '@mui/material/colors';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: grey,
          divider: amber[200],
          text: {
            lightGray: '#9D9D9D',
            middleGray: '#6A6A6A',
            darkGray: '#515151',
            purple: '#9747FF',
            oppositeColor: '#ffffff',
          },
          background: {
            default: grey[50],
            purple: '#9747FF',
          },
        }
      : {
          // palette values for dark mode
          primary: blueGrey,
          divider: blueGrey[900],
          background: {
            default: grey[900],
            purple: '#9747FF',
          },
          text: {
            lightGray: grey[50],
            middleGray: grey[100],
            darkGray: grey[100],
            purple: '#9747FF',
            oppositeColor: '#ffffff',
          },
        }),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '--TextField-brandBorderColor': '#C4C4C4',
          '--TextField-brandBorderHoverColor': '#757575',
          '--TextField-brandBorderFocusedColor': '#0c6cbc',
          '& label.Mui-focused': {
            color: 'var(--TextField-brandBorderFocusedColor)',
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
        },
      },
    },
  },
});
