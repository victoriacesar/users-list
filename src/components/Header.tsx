import { useTheme } from '@/hooks/useTheme';
import { Avatar, Box } from '@mui/material';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { ToggleThemeBtn } from './ToggleThemeBtn';

interface HeaderProps {
  handleChangeTab: (event: React.SyntheticEvent, newValue: number) => void;
  value: number;
}

export const Header = ({ handleChangeTab, value }: HeaderProps) => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        borderBottom: `1px solid ${palette.colorOptions.red}`,
        height: '70px',
        padding: '0 3rem 0 3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '3rem',
      }}
    >
      <Logo />
      <Menu handleChangeTab={handleChangeTab} value={value} />
      <Box
        sx={{
          marginLeft: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '1rem',
        }}
      >
        <ToggleThemeBtn />
        <Avatar sx={{ bgcolor: palette.colorOptions.purple }}>V</Avatar>
      </Box>
    </Box>
  );
};
