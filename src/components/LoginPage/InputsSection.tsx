import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useMemo } from 'react';
import { useTheme } from '@/hooks/useTheme';

export interface InputsSectionProps {
  handleClick: () => void;
  showPassword: boolean;
  handlePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  emailValue: string;
  passwordValue: string;
  errors: {
    email: boolean;
    password: boolean;
  };
}

export const InputsSection = ({
  handleClick,
  showPassword,
  handlePassword,
  passwordValue,
  emailValue,
  handleEmail,
  errors,
}: InputsSectionProps) => {
  const { palette } = useTheme();

  const transformPassword = useMemo(() => {
    return showPassword ? passwordValue.replace(/./g, '*') : passwordValue;
  }, [passwordValue, showPassword]);

  return (
    <Box sx={{ width: '80%' }}>
      <TextField
        id="email-field"
        label="Email"
        variant="outlined"
        sx={{ width: '100%' }}
        value={emailValue}
        onChange={handleEmail}
        error={errors.email}
      />
      {errors.email && (
        <Typography
          variant="subtitle2"
          sx={{
            color: palette.colorOptions.red,
            marginLeft: '10px',
            fontSize: '0.7rem',
            fontWeight: 400,
            marginTop: '3px',
          }}
        >
          Email não encontrado. Confira e tente novamente.
        </Typography>
      )}
      <TextField
        id="field-senha"
        label="Senha"
        type="text"
        sx={{ width: '100%', marginTop: '1rem' }}
        variant="outlined"
        onChange={handlePassword}
        value={transformPassword}
        error={errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={handleClick} edge="end">
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {errors.password && (
        <Typography
          variant="subtitle2"
          sx={{
            color: palette.colorOptions.red,
            marginLeft: '10px',
            fontSize: '0.7rem',
            fontWeight: 400,
            marginTop: '3px',
          }}
        >
          Senha incorreta. Por favor, verifique e tente novamente.
        </Typography>
      )}
    </Box>
  );
};
