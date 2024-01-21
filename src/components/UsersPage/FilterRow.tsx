import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { de } from 'date-fns/locale/de';
import { useTheme } from '@/hooks';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Filter, filtersItems } from '../utils';

interface FilterRowProps {
  filterRow: Filter;
  setFiltersRows: Dispatch<SetStateAction<Filter[]>>;
  isFirstRow: boolean;
  filtersRows: Filter[];
  removeFilter: (filterId: string) => void;
}

export const FilterRow = ({
  filterRow,
  setFiltersRows,
  isFirstRow,
  filtersRows,
  removeFilter,
}: FilterRowProps) => {
  const { palette } = useTheme();

  const [filter, setFilter] = useState({
    column: '',
    comparation: '',
    componentValue: {
      date: new Date(),
      text: '',
    },
    condition: '',
  });

  useEffect(() => {
    setFilter(filterRow);
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setFiltersRows((prevState) => {
      const findFilter = filtersRows.find((item) => item.id === filterRow.id);

      if (findFilter) {
        return prevState.map((item) => {
          if (item.id === filterRow.id) {
            return {
              ...filterRow,
              ...filter,
            };
          }
          return item;
        });
      }

      return prevState;
    });
  }, [filter]);

  const renderColumnComponent = () => {
    return filter.column === 'registrationDate' ? (
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
        <DatePicker
          label="dd/mm/aaaa"
          format="dd/MM/yyyy"
          onChange={(newValue) => {
            if (newValue) {
              setFilter({
                ...filter,
                componentValue: {
                  ...filter.componentValue,
                  date: newValue,
                },
              });
            }
          }}
          value={filterRow.componentValue.date}
          slotProps={{
            textField: {
              sx: {
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: palette.colorOptions.middleGray,
                  },
                  '&:hover fieldset': {
                    borderColor: palette.colorOptions.purple,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: palette.colorOptions.purple,
                  },
                },
              },
            },
          }}
        />
      </LocalizationProvider>
    ) : (
      <FormControl sx={{ width: '236.8px' }}>
        <InputLabel id="select-active-inactive">condição</InputLabel>
        <Select
          labelId="select-active-inactive-label"
          id="select-active-inactive"
          value={filterRow.componentValue.text}
          label="condição"
          onChange={(e) => {
            setFilter({
              ...filter,
              componentValue: {
                ...filter.componentValue,
                text: e.target.value,
              },
            });
          }}
          name={'componentValue'}
        >
          <MenuItem value={'active'}>Ativo</MenuItem>
          <MenuItem value={'active'}>Inativo</MenuItem>
        </Select>
      </FormControl>
    );
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <CloseIcon
        color="inherit"
        sx={{
          color: palette.colorOptions.inactiveText,
          cursor: 'pointer',
        }}
        onClick={() => removeFilter(filterRow.id)}
      />
      {!isFirstRow && (
        <FormControl sx={{ width: '90px' }}>
          <Select
            id="select-condition"
            value={filterRow.condition}
            defaultValue={'ou'}
            onChange={handleChange}
            name={'condition'}
          >
            <MenuItem value="e">e</MenuItem>
            <MenuItem value="ou">ou</MenuItem>
          </Select>
        </FormControl>
      )}
      {filtersRows.length > 1 && isFirstRow && <Box sx={{ width: '90px' }} />}
      <FormControl sx={{ width: 200 }}>
        <InputLabel id="select-column">Coluna</InputLabel>
        <Select
          labelId="select-column-label"
          id="select-column"
          value={filterRow.column}
          label="Coluna"
          onChange={handleChange}
          name={'column'}
        >
          {filtersItems.columns.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: 200 }}>
        <InputLabel id="select-filters">é</InputLabel>
        <Select
          labelId="select-filters-label"
          id="select-filters"
          value={filterRow.comparation}
          label="é"
          onChange={handleChange}
          name={'comparation'}
        >
          {filtersItems.filters[filter.column || 'registrationDate'].map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {renderColumnComponent()}
    </Box>
  );
};
