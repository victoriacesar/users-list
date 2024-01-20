'use client';

import { LoginInfo } from '@/components/LoginInfo';
import { ToggleThemeBtn } from '@/components/ToggleThemeBtn';
import { Grid } from '@mui/material';

export default function Login() {
  return (
    <>
      <ToggleThemeBtn />
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
            bgcolor: 'background.white',
          }}
        >
          <LoginInfo />
        </Grid>
        <Grid
          item
          xs={7}
          sx={{
            bgcolor: 'background.purple',
          }}
        />
      </Grid>
    </>
  );
}
