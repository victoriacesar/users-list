import { useState } from 'react';
import { InputsSection } from './InputsSection';
import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@/hooks/useTheme';
import { Logo } from './Logo';

export const LoginInfo = () => {
  const { palette } = useTheme();
  const { colorOptions } = palette;

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

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
        gap: '.5rem',
      }}
    >
      <Logo />
      <Box
        sx={{
          marginBottom: '1.5rem',
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: colorOptions.darkGray,
          }}
        >
          Bem-vindo(a)
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            color: colorOptions.middleGray,
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
        errors={errors}
      />
      <Typography
        variant="subtitle1"
        sx={{
          color: colorOptions.purple,
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
          bgcolor: colorOptions.purple,
          padding: '10px 25px',
          color: colorOptions.oppositeColor,
          ':hover': {
            bgcolor: colorOptions.purple,
            filter: 'brightness(0.9)',
          },
          marginTop: '1.5rem',
        }}
        onClick={() =>
          setErrors((prevState) => ({
            email: !prevState.email,
            password: !prevState.password,
          }))
        }
      >
        Acessar plataforma
      </Button>
    </Box>
  );
};
