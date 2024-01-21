import { Dispatch, SetStateAction, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Popover,
  Radio,
  RadioGroup,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { sortByItems } from '../utils';

interface OrderByBtnProps {
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
  orderBy: string;
  setOrderBy: Dispatch<SetStateAction<string>>;
}

export const OrderByBtn = ({ sortBy, setSortBy, orderBy, setOrderBy }: OrderByBtnProps) => {
  const { palette } = useTheme();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'order-by-popover' : undefined;

  return (
    <>
      <Button
        sx={{
          textTransform: 'none',
          color: palette.colorOptions.purple,
          display: 'flex',
          gap: '12px',
        }}
        onClick={(e) => handleClick(e)}
        aria-describedby={id}
      >
        Ordenar por
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
            padding: '.5rem 1rem',
            width: '250px',
          }}
        >
          <FormControl>
            <RadioGroup
              name="radio-buttons-order-by-group"
              value={sortBy}
              onChange={(event) => setSortBy((event.target as HTMLInputElement).value)}
            >
              {sortByItems.map((item) => {
                return (
                  <FormControlLabel
                    key={item.value}
                    value={item.value}
                    control={
                      <Radio
                        sx={{
                          '&.Mui-checked': {
                            color: palette.colorOptions.purple,
                          },
                        }}
                      />
                    }
                    label={item.label}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
          {sortBy && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
              }}
            >
              <Button
                sx={{
                  backgroundColor:
                    orderBy === 'asc'
                      ? palette.colorOptions.purple
                      : palette.colorOptions.lightGray,
                  color: palette.colorOptions.rowColor,
                  ':hover': {
                    backgroundColor:
                      orderBy === 'asc'
                        ? palette.colorOptions.purple
                        : palette.colorOptions.lightGray,
                    filter: 'brightness(0.9)',
                  },
                }}
                onClick={() => setOrderBy('asc')}
              >
                ASC
              </Button>
              <Button
                sx={{
                  backgroundColor:
                    orderBy === 'desc'
                      ? palette.colorOptions.purple
                      : palette.colorOptions.lightGray,
                  color: palette.colorOptions.rowColor,
                  ':hover': {
                    backgroundColor:
                      orderBy === 'desc'
                        ? palette.colorOptions.purple
                        : palette.colorOptions.lightGray,
                    filter: 'brightness(0.9)',
                  },
                  '& .Mui-selected': {
                    backgroundColor: palette.colorOptions.purple,
                  },
                }}
                onClick={() => setOrderBy('desc')}
              >
                DESC
              </Button>
            </Box>
          )}
        </Box>
      </Popover>
    </>
  );
};
