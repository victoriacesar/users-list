import { useTheme } from '@/hooks/useTheme';
import { Typography } from '@mui/material';

export const Logo = () => {
  const { palette } = useTheme();

  return (
    <Typography
      variant="h6"
      gutterBottom
      sx={{
        color: palette.colorOptions.lightGray,
        fontWeight: '700',
        margin: 0,
      }}
    >
      LOGO
    </Typography>
  );
};
