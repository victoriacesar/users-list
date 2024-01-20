import { useTheme } from '@/hooks/useTheme';
import { Button } from '@mui/material';

export const ToggleThemeBtn = () => {
  const { toggleColorMode, mode, palette } = useTheme();

  return (
    <Button
      sx={{
        bgcolor: palette.background?.default,
        color: palette.colorOptions.purple,
        position: 'absolute',
        right: '10px',
        top: '10px',
        padding: '10px',
        ':hover': {
          bgcolor: palette.background?.default,
          filter: 'brightness(0.9)',
        },
      }}
      onClick={toggleColorMode}
    >
      {mode}
    </Button>
  );
};
