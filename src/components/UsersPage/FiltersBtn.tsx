import { useTheme } from '@/hooks/useTheme';
import { useState } from 'react';
import { Box, Button, Popover, Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FilterRow } from './FilterRow';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Filter, createNewFilter } from '../utils';

interface FiltersBtnProps {
  setFiltersRows: React.Dispatch<React.SetStateAction<Filter[]>>;
  filtersRows: Filter[];
}

export const FiltersBtn = ({ setFiltersRows, filtersRows }: FiltersBtnProps) => {
  const { palette } = useTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'filter-by-popover' : undefined;

  // const [filtersRows, setFiltersRows] = useState<IFilter[]>([createNewFilter()]);

  const handleRemoveFilter = (filterId: string) => {
    setFiltersRows((prevState) => prevState.filter((item) => item.id !== filterId));
  };

  return (
    <>
      <Button
        sx={{
          textTransform: 'none',
          color: palette.colorOptions.purple,
        }}
        onClick={(e) => handleClick(e)}
        aria-describedby={id}
      >
        Filtrar por
        {Boolean(anchorEl) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box
          sx={{
            padding: '1.5rem',
            maxWidth: '750px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexDirection: 'column',
          }}
        >
          {filtersRows.map((item) => {
            return (
              <FilterRow
                key={item.id}
                filterRow={item}
                isFirstRow={filtersRows[0].id === item.id}
                setFiltersRows={setFiltersRows}
                filtersRows={filtersRows}
                removeFilter={handleRemoveFilter}
              />
            );
          })}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              textTransform: 'none',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: '1rem',
            }}
          >
            <Button
              sx={{
                display: 'flex',
                alignItems: 'center',
                textTransform: 'none',
                gap: '10px',
                padding: 0,
              }}
              onClick={() => setFiltersRows((prevState) => [...prevState, createNewFilter()])}
            >
              <AddIcon
                fontSize="small"
                sx={{
                  color: palette.colorOptions.purple,
                }}
              />
              <Typography sx={{ color: palette.colorOptions.purple }}>Adicionar filtro</Typography>
            </Button>
            <Button
              sx={{
                display: 'flex',
                alignItems: 'center',
                textTransform: 'none',
                gap: '10px',
                padding: 0,
              }}
              onClick={() => setFiltersRows([createNewFilter()])}
            >
              <DeleteForeverOutlinedIcon
                fontSize="small"
                sx={{
                  color: palette.colorOptions.inactiveText,
                }}
              />
              <Typography sx={{ color: palette.colorOptions.inactiveText }}>
                Remover filtros
              </Typography>
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
};
