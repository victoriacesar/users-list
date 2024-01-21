import { useTheme } from '@/hooks/useTheme';
import { mockedData } from '@/mockedData';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useMemo, useState } from 'react';
import { StatusBox } from './StatusBox';
import { ActiveInactivePopup } from './ActiveInactivePopup';
import { formatDate } from '@/utils/formatters';

interface UsersTableProps {
  inputSearch: string;
}

export const UsersTable = ({ inputSearch }: UsersTableProps) => {
  const { palette } = useTheme();

  const [data, setData] = useState(mockedData);
  const [selectedUser, setSelectedUser] = useState<number>();

  const orderData = useMemo(() => {
    if (inputSearch) {
      return data.filter((item) => {
        return (
          item.id.toString().includes(inputSearch) ||
          item.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
          item.phone.includes(inputSearch)
        );
      });
    }
    return data;
  }, [inputSearch, data]);

  const toggleActiveInactive = (userId: number, option: string) => {
    const findUserIndex = data.findIndex((item) => item.id === userId);

    if (findUserIndex !== -1 && data[findUserIndex]?.status !== option) {
      const newData = [...data];
      newData[findUserIndex] = {
        ...newData[findUserIndex],
        status: option === 'active' ? 'Ativo' : 'Inativo',
      };

      setData(newData);
    }
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead
            sx={{
              backgroundColor: palette.background?.default,
            }}
          >
            <TableRow>
              <TableCell align="center" sx={{ position: 'sticky', top: '0px' }}>
                ID
              </TableCell>
              <TableCell align="center" sx={{ position: 'sticky', top: '0px' }}>
                Nome
              </TableCell>
              <TableCell align="center" sx={{ position: 'sticky', top: '0px' }}>
                Telefone
              </TableCell>
              <TableCell align="center" sx={{ position: 'sticky', top: '0px' }}>
                Data de cadastro
              </TableCell>
              <TableCell align="center" sx={{ position: 'sticky', top: '0px' }}>
                Status
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderData.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  height: '65px',
                  '&:nth-of-type(odd)': {
                    backgroundColor: palette.colorOptions.oppositeColor,
                  },
                  '&:nth-of-type(even)': {
                    backgroundColor: palette.background?.default,
                  },
                }}
              >
                <TableCell scope="row" sx={{ width: '120px' }} align="center">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <TableCell align="center">{formatDate(row.registrationDate)}</TableCell>
                <TableCell align="center">
                  <StatusBox status={row.status} />
                </TableCell>
                <TableCell align="center">
                  <ActiveInactivePopup
                    selectedUser={selectedUser}
                    toggleActiveInactive={toggleActiveInactive}
                    userId={row.id}
                    setSelectedUser={setSelectedUser}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
