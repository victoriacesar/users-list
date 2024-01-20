'use client';

import { LoginInfo } from '@/components/LoginInfo';
import { ToggleThemeBtn } from '@/components/ToggleThemeBtn';
import { useTheme } from '@/hooks/useTheme';
import { Grid } from '@mui/material';

export default function Login() {
  const { palette } = useTheme();

  return (
    <>
      <ToggleThemeBtn
        props={{
          right: '10px',
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
          xs={5}
          sx={{
            bgcolor: palette.background?.default,
          }}
        >
          <LoginInfo />
        </Grid>
        <Grid
          item
          xs={7}
          sx={{
            bgcolor: palette.colorOptions.purple,
          }}
        />
      </Grid>
    </>
  );
}
