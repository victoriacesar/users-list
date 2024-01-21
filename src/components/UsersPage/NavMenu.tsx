import { Box, MenuItem, Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme as useThemeLocal } from '@/hooks';

const menuItems = [
  {
    label: 'Clientes',
    value: 'clients',
  },
  {
    label: 'Endereços',
    value: 'addresses',
  },
  {
    label: 'Entregas',
    value: 'deliveries',
  },
];

interface MenuProps {
  value: number;
  handleChangeTab: (event: React.SyntheticEvent, newValue: number) => void;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const NavMenu = ({ value, handleChangeTab }: MenuProps) => {
  const theme = useTheme();
  const { palette } = useThemeLocal();

  const onlyMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return onlyMediumScreen ? (
    <div>
      <Box
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <MenuIcon
          sx={{
            color: palette.colorOptions.purple,
          }}
        />
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menuItems.map((item) => {
          return <MenuItem key={item.label}>{item.label}</MenuItem>;
        })}{' '}
      </Menu>
    </div>
  ) : (
    <Tabs
      value={value}
      onChange={handleChangeTab}
      aria-label="basic tabs example"
      sx={{
        height: '100%',
      }}
    >
      {menuItems.map((item, index) => {
        return <Tab key={item.value} label={item.label} {...a11yProps(index)} />;
      })}
    </Tabs>
  );
};
