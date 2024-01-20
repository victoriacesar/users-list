import { IconButton, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useMemo } from 'react';

interface StyledInputProps {
  handleClick: () => void;
  showPassword: boolean;
  handlePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  emailValue: string;
  passwordValue: string;
}

export const InputsSection = ({
  handleClick,
  showPassword,
  handlePassword,
  passwordValue,
  emailValue,
  handleEmail,
}: StyledInputProps) => {
  const transformPassword = useMemo(() => {
    return showPassword ? passwordValue.replace(/./g, '•') : passwordValue;
  }, [passwordValue, showPassword]);

  return (
    <>
      <TextField
        id="email-field"
        label="Email"
        variant="outlined"
        sx={{ width: '80%' }}
        value={emailValue}
        onChange={handleEmail}
      />
      <TextField
        id="field-senha"
        label="Senha"
        type="text"
        sx={{ width: '80%' }}
        variant="outlined"
        onChange={handlePassword}
        value={transformPassword}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={handleClick} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
