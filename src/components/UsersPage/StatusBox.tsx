import { useTheme } from '@/hooks/useTheme';
import { Box, Typography } from '@mui/material';

interface StatusBoxProps {
  status: string;
}

export const StatusBox = ({ status }: StatusBoxProps) => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        color: palette.colorOptions.darkGray,
        backgroundColor:
          status === 'Ativo' ? palette.colorOptions.active : palette.colorOptions.inactive,
        width: '65px',
        margin: '0 auto',
        borderRadius: '100px',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: '12px',
          color:
            status === 'Ativo'
              ? palette.colorOptions.activeText
              : palette.colorOptions.inactiveText,
        }}
      >
        {status}
      </Typography>
    </Box>
  );
};
