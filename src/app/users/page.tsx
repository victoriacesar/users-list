'use client';

import { CustomTabPanel } from '@/components/CustomTabPanel';
import { Header } from '@/components/Header';
import { UsersMenu } from '@/components/UsersMenu';
import { UsersTable } from '@/components/UsersTable';
import { Box } from '@mui/material';
import { useState } from 'react';

export default function Users() {
  const [tabValue, setTabValue] = useState(0);
  const [inputSearch, setInputSearch] = useState('');

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <Header handleChangeTab={handleChangeTab} value={tabValue} />
      <CustomTabPanel value={tabValue} index={0}>
        <UsersMenu inputSearch={inputSearch} setInputSearch={setInputSearch} />
        <UsersTable inputSearch={inputSearch} />
      </CustomTabPanel>
    </Box>
  );
}
