import { useTheme } from '@/hooks/useTheme';
import { Box, Button, Popover } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

export const FiltersBtn = () => {
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
            padding: '.5rem 1rem',
            maxWidth: '750px',
            // minW
          }}
        ></Box>
      </Popover>
    </>
  );
};
