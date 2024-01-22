import { useTheme } from '@/hooks';
import { TablePagination } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface PaginationProps {
  setPage: Dispatch<SetStateAction<number>>;
  setRowsPerPage: Dispatch<SetStateAction<number>>;
  pageCount: number;
  page: number;
  rowsPerPage: number;
}

export const Pagination = ({
  setPage,
  setRowsPerPage,
  pageCount,
  page,
  rowsPerPage,
}: PaginationProps) => {
  const { palette } = useTheme();

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      data-testid="pagination-component"
      component="div"
      count={pageCount}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPageOptions={[10, 20]}
      slotProps={{
        actions: {
          nextButton: {
            disabled: page === pageCount - 1,
          },
        },
      }}
      labelRowsPerPage={'Linhas por página'}
      sx={{
        fontSize: '12px',
        color: palette.colorOptions.lightGray,
        '& p': {
          fontSize: '12px',
        },
      }}
    />
  );
};
