'use client';

import { getDesignTokens } from '@/styles/theme';
import { CssBaseline, PaletteMode, PaletteOptions, Theme } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

interface ThemeContextProviderProps {
  children: ReactNode;
}

interface ThemeContextType {
  mode: string;
  toggleColorMode: () => void;
  themeColor: Theme;
  palette: PaletteOptions;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeContextProviderProps): JSX.Element {
  const [mode, setMode] = useState<PaletteMode>('light');

  const toggleColorMode = () => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));

  const themeColor = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const palette = themeColor.palette;

  return (
    <ThemeContext.Provider
      value={{
        themeColor,
        toggleColorMode,
        mode,
        palette,
      }}
    >
      <ThemeProvider theme={themeColor}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  return context;
}
