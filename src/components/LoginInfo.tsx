import { useState } from 'react';
import { InputsSection } from './Input';
import { Box, Button, Typography } from '@mui/material';

export const LoginInfo = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box
      sx={{
        display: 'flex',
        margin: '0 auto',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: '100%',
        width: '80%',
        gap: '1rem',
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: 'text.lightGray',
        }}
      >
        LOGO
      </Typography>
      <Box
        sx={{
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: 'text.darkGray',
          }}
        >
          Bem-vindo(a)
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            color: 'text.middleGray',
          }}
        >
          Acesse sua conta para iniciar a sessão
        </Typography>
      </Box>
      <InputsSection
        handleClick={handleClickShowPassword}
        showPassword={showPassword}
        handlePassword={(e) => setPassword(e.target.value)}
        passwordValue={password}
        emailValue={email}
        handleEmail={(e) => setEmail(e.target.value)}
      />
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{
          color: 'text.purple',
          cursor: 'pointer',
        }}
      >
        Esqueceu sua senha?
      </Typography>
      <Button
        disableRipple
        sx={{
          textTransform: 'none',
          fontweight: '400',
          bgcolor: 'background.purple',
          padding: '10px 25px',
          color: 'text.oppositeColor',
          ':hover': {
            bgcolor: 'background.purple',
            filter: 'brightness(0.9)',
          },
          marginTop: '1rem',
        }}
      >
        Acessar plataforma
      </Button>
    </Box>
  );
};
