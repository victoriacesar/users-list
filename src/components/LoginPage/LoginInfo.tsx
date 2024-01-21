import { useState } from 'react';
import { InputsSection } from './InputsSection';
import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@/hooks/useTheme';
import { Logo } from '../common/Logo';
import { mockedUsers } from '@/mockedData';
import { useRouter } from 'next/navigation';

export const LoginInfo = () => {
  const { palette } = useTheme();
  const router = useRouter();

  const { colorOptions } = palette;

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const verifyLoginFields = () => {
    setErrors({
      email: false,
      password: false,
    });

    if (email === '') {
      setErrors((prev) => ({ ...prev, email: true }));
    }

    if (password === '') {
      setErrors((prev) => ({ ...prev, password: true }));
    }
  };

  const verifyCredentials = (email: string, password: string) => {
    const findUser = mockedUsers.find((user) => user.email === email);

    const isEmailEqual = findUser?.email === email;
    const isPasswordEqual = findUser?.password === password;

    !isEmailEqual && setErrors((prev) => ({ ...prev, email: true }));
    !isPasswordEqual && setErrors((prev) => ({ ...prev, password: true }));

    if (isEmailEqual && isPasswordEqual) {
      router.push('/users');
    }
  };

  const handleLogin = (email: string, password: string) => {
    verifyLoginFields();

    if (email && password) {
      verifyCredentials(email, password);
    }
  };

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
        onClick={() => handleLogin(email, password)}
      >
        Acessar plataforma
      </Button>
    </Box>
  );
};
