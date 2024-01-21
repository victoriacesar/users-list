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
      active: string;
      inactive: string;
      activeText: string;
      inactiveText: string;
      border: string;
      rowColor: string;
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
      active: string;
      inactive: string;
      activeText: string;
      inactiveText: string;
      border: string;
      rowColor: string;
    };
  }
}
