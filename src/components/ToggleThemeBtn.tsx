import { useTheme } from '@/hooks/useTheme';
import { Button } from '@mui/material';

export const ToggleThemeBtn = () => {
  const { toggleColorMode, mode } = useTheme();

  return (
    <Button
      sx={{
        bgcolor: 'background.default',
        color: 'text.purple',
        position: 'absolute',
        right: '10px',
        top: '10px',
        padding: '10px',
      }}
      onClick={toggleColorMode}
    >
      {mode}
    </Button>
  );
};
