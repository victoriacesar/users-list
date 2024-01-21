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
import { orderByItems } from '../utils';

interface OrderByBtnProps {
  orderBy: string;
  setOrderBy: Dispatch<SetStateAction<string>>;
}

export const OrderByBtn = ({ orderBy, setOrderBy }: OrderByBtnProps) => {
  const { palette } = useTheme();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
              value={orderBy}
              onChange={(event) => setOrderBy((event.target as HTMLInputElement).value)}
            >
              {orderByItems.map((item) => {
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
        </Box>
      </Popover>
    </>
  );
};
