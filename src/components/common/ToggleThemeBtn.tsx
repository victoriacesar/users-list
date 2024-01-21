import { useTheme } from '@/hooks/useTheme';
import { Button, SxProps, Theme } from '@mui/material';

interface ToggleThemeBtnProps {
  props?: SxProps<Theme>;
}

export const ToggleThemeBtn = ({ props }: ToggleThemeBtnProps) => {
  const { toggleColorMode, mode, palette } = useTheme();

  return (
    <Button
      sx={{
        bgcolor: palette.background?.default,
        color: palette.colorOptions.purple,
        ':hover': {
          bgcolor: palette.background?.default,
          filter: 'brightness(0.9)',
        },
        ...props,
      }}
      onClick={toggleColorMode}
    >
      {mode}
    </Button>
  );
};
