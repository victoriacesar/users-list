import { useTheme } from '@/hooks/useTheme';
import { Box, TextField, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { OrderByBtn } from '.';
import { FiltersBtn } from './FiltersBtn';

interface UsersMenuProps {
  inputSearch: string;
  setInputSearch: Dispatch<SetStateAction<string>>;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
  orderBy: string;
  setOrderBy: Dispatch<SetStateAction<string>>;
}

export const UsersMenu = ({
  inputSearch,
  setInputSearch,
  sortBy,
  setSortBy,
  orderBy,
  setOrderBy,
}: UsersMenuProps) => {
  const { palette } = useTheme();

  return (
    <>
      <Typography
        variant="h5"
        sx={{
          color: palette.colorOptions.darkGray,
        }}
      >
        Usuários
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyItems: 'flex-start',
          marginTop: '2rem',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        <TextField
          placeholder="Pesquisar ID ou nome ou telefone..."
          type="text"
          sx={{
            width: '300px',
          }}
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <OrderByBtn
          sortBy={sortBy}
          setSortBy={setSortBy}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
        />
        <FiltersBtn />
      </Box>
    </>
  );
};
