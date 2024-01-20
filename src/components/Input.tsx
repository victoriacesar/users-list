import { IconButton, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
        type={showPassword ? 'text' : 'password'}
        sx={{ width: '80%' }}
        variant="outlined"
        onChange={handlePassword}
        value={passwordValue}
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
