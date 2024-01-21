import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useMemo, useState } from 'react';
import { StatusBox } from '../StatusBox';
import { ActiveInactivePopup } from '../ActiveInactivePopup';
import { formatDate } from '@/utils/formatters';
import { sortData, tableHeaderItems } from '../../utils';
import { useUsers, useTheme } from '@/hooks';

interface UsersTableProps {
  inputSearch: string;
  sortBy: string;
  orderBy: string;
}

export const UsersTable = ({ inputSearch, sortBy, orderBy }: UsersTableProps) => {
  const { palette } = useTheme();
  const { usersData } = useUsers();

  const [data, setData] = useState(usersData);
  const [selectedUser, setSelectedUser] = useState<number>();

  const orderData = useMemo(() => {
    if (inputSearch) {
      const filteredData = data.filter((item) => {
        return (
          item.id.toString().includes(inputSearch) ||
          item.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
          item.phone.includes(inputSearch)
        );
      });

      return sortData(filteredData, sortBy, orderBy);
    }

    return sortData(data, sortBy, orderBy);
  }, [inputSearch, data, sortBy, orderBy]);

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
              {tableHeaderItems.map((item) => {
                return (
                  <TableCell key={item} align="center" sx={{ position: 'sticky', top: '0px' }}>
                    {item}
                  </TableCell>
                );
              })}
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
                    backgroundColor: palette.colorOptions.rowColor,
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
