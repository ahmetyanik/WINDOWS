import React from 'react'
import TablePagination from '@mui/material/TablePagination'

const PageOf = () => {
  const [page, setPage] = React.useState(2)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  return (
    <div className="page-of">
      <TablePagination
        showFirstButton
        onPageChange={handleChangePage}
        component="div"
        count={100}
        page={page}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        showLastButton
      />
    </div>
  )
}

export default PageOf
