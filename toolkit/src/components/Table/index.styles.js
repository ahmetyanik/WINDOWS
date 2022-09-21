import styled from 'styled-components'
import Table from '@mui/material/Table'
import TableFooter from '@mui/material/TableFooter'

export const StyledTable = styled(Table)`
  width: 100%;
  .MuiTableCell-head {
    background: rgba(72, 94, 173, 0.08);
    border-bottom: 1px solid ${(p) => p.theme.colors.primary};
    border-top: 1px solid ${(p) => p.theme.colors.primary};
  }
`
export const StyledTableFooter = styled(TableFooter)``
