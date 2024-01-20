'use client';

import { CustomTabPanel } from '@/components/CustomTabPanel';
import { Header } from '@/components/Header';
import { PatientsTable } from '@/components/PatientsTable';
import { Box } from '@mui/material';
import { useState } from 'react';

export default function Patients() {
  const [tabValue, setTabValue] = useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <Header handleChangeTab={handleChangeTab} value={tabValue} />
      <CustomTabPanel value={tabValue} index={0}>
        <PatientsTable />
      </CustomTabPanel>
    </Box>
  );
}
