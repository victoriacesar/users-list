import { useTheme } from '@/hooks/useTheme';
import { mockedData } from '@/mockedData';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';

export const PatientsTable = () => {
  const { palette } = useTheme();

  return (
    <Box>
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
        ></TextField>
        <Button
          sx={{
            textTransform: 'none',
            color: palette.colorOptions.purple,
          }}
        >
          Ordenar por
        </Button>
        <Button
          sx={{
            textTransform: 'none',
            color: palette.colorOptions.purple,
          }}
        >
          Filtrar por
        </Button>
      </Box>

      <TableContainer>
        <Table size="small" stickyHeader>
          <TableHead
            sx={{
              backgroundColor: palette.background?.default,
            }}
          >
            <TableRow>
              <TableCell sx={{ width: '120px' }}>ID</TableCell>
              <TableCell align="left">Nome</TableCell>
              <TableCell align="left">Telefone</TableCell>
              <TableCell align="left">Data de cadastro</TableCell>
              <TableCell align="left">Status</TableCell>
              {/* <TableCell align="right">Icon</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {mockedData.map((row) => (
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
                <TableCell component="th" scope="row" sx={{ width: '120px' }}>
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">{row.registrationDate}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                {/* <TableCell align="right">Icon</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
