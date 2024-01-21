'use client';

import { LoginInfo } from '@/components/LoginPage';
import { ToggleThemeBtn } from '@/components/common';
import { useTheme as useThemeLocal } from '@/hooks/useTheme';
import { Grid, useMediaQuery, useTheme } from '@mui/material';

export default function Login() {
  const { palette } = useThemeLocal();
  const theme = useTheme();
  const onlyMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <ToggleThemeBtn
        props={{
          right: onlyMediumScreen ? '45px' : '10px',
          top: '10px',
          position: 'absolute',
          padding: '10px',
        }}
      />
      <Grid
        container
        sx={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <Grid
          item
          xs={onlyMediumScreen ? 11 : 5}
          sx={{
            bgcolor: palette.background?.default,
          }}
        >
          <LoginInfo />
        </Grid>
        <Grid
          item
          xs={onlyMediumScreen ? 1 : 7}
          sx={{
            bgcolor: palette.colorOptions.purple,
          }}
        />
      </Grid>
    </>
  );
}
