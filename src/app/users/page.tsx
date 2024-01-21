'use client';

import { CustomTabPanel, Header, UsersMenu, UsersTable } from '@/components/UsersPage';
import { Box } from '@mui/material';
import { useState } from 'react';

export default function Users() {
  const [tabValue, setTabValue] = useState(0);
  const [inputSearch, setInputSearch] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [orderBy, setOrderBy] = useState('');

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <Header handleChangeTab={handleChangeTab} value={tabValue} />
      <CustomTabPanel value={tabValue} index={0}>
        <UsersMenu
          inputSearch={inputSearch}
          setInputSearch={setInputSearch}
          sortBy={sortBy}
          setSortBy={setSortBy}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
        />
        <UsersTable inputSearch={inputSearch} sortBy={sortBy} orderBy={orderBy} />
      </CustomTabPanel>
    </Box>
  );
}
