import { Box, Button, Popover, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import { useTheme } from '@/hooks/useTheme';
import { useState } from 'react';

interface ActiveInactivePopupProps {
  userId: number;
  selectedUser: number | undefined;
  toggleActiveInactive: (userId: number, option: string) => void;
  setSelectedUser: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const ActiveInactivePopup = ({
  userId,
  toggleActiveInactive,
  selectedUser,
  setSelectedUser,
}: ActiveInactivePopupProps) => {
  const { palette } = useTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, userId: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(userId);
  };

  return (
    <>
      <Button
        sx={{
          cursor: 'pointer',
          width: '40px',
          margin: '0 auto',
          ':hover': {
            backgroundColor: 'transparent',
          },
        }}
        aria-describedby={id}
        onClick={(e) => handleClick(e, userId)}
      >
        <MoreVertIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box
          sx={{
            width: '200px',
          }}
        >
          <Typography sx={{ p: 2, borderBottom: `1px solid ${palette.colorOptions.border}` }}>
            Mudar status
          </Typography>
          <Button
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '10px 1rem',
              gap: '10px',
              width: '100%',
              textTransform: 'none',
            }}
            onClick={() => toggleActiveInactive(selectedUser!, 'active')}
          >
            <CheckCircleOutlineIcon color="success" fontSize="medium" />
            <Typography sx={{ color: palette.colorOptions.activeText, fontSize: '1rem' }}>
              Ativar
            </Typography>
          </Button>
          <Button
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '10px 1rem',
              gap: '10px',
              width: '100%',
              textTransform: 'none',
            }}
            onClick={() => toggleActiveInactive(selectedUser!, 'inactive')}
          >
            <DoDisturbAltIcon color="warning" fontSize="medium" />
            <Typography sx={{ color: palette.colorOptions.inactiveText, fontSize: '1rem' }}>
              Inativar
            </Typography>
          </Button>
        </Box>
      </Popover>
    </>
  );
};
