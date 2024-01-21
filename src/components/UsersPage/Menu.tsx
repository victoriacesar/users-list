import { Tab, Tabs } from '@mui/material';

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

export const Menu = ({ value, handleChangeTab }: MenuProps) => {
  return (
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
