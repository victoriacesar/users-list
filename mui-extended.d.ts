import '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    colorOptions: {
      lightGray: string;
      middleGray: string;
      darkGray: string;
      purple: string;
      oppositeColor: string;
      red: string;
    };
  }

  interface PaletteOptions {
    colorOptions: {
      lightGray: string;
      middleGray: string;
      darkGray: string;
      purple: string;
      oppositeColor: string;
      red: string;
    };
  }
}
