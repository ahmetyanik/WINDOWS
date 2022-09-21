import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { BsEyeFill } from 'react-icons/bs'
import { StyledContainer } from './index.styles'

const Tablo = () => {
  const createData = (name, position, published, closing, employment, salary, viev) => {
    return { name, position, published, closing, employment, salary, viev }
  }
  const rows = [
    createData(
      'Apple',
      'Business Analist',
      'Mon Apr 15 2022',
      'Apr 25 2022',
      'Full Time',
      '€60.000',
      <BsEyeFill />
    ),
    createData(
      'Apple',
      'Business Analist',
      'Mon Apr 15 2022',
      'Apr 25 2022',
      'Full Time',
      '€60.000',
      <BsEyeFill />
    ),
    createData(
      'Apple',
      'Business Analist',
      'Mon Apr 15 2022',
      'Apr 25 2022',
      'Full Time',
      '€60.000',
      <BsEyeFill />
    ),
    createData(
      'Apple',
      'Business Analist',
      'Mon Apr 15 2022',
      'Apr 25 2022',
      'Full Time',
      '€60.000',
      <BsEyeFill />
    ),
  ]
  return (
    <StyledContainer>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>COMPANY NAME </TableCell>
              <TableCell>POSITION</TableCell>
              <TableCell>PUBLISHED DATE</TableCell>
              <TableCell>CLOSING DATE</TableCell>
              <TableCell>EMPLOYMENT TYPE</TableCell>
              <TableCell>SALARY</TableCell>
              <TableCell>VIEV</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.position}</TableCell>
                <TableCell>{row.published}</TableCell>
                <TableCell>{row.closing}</TableCell>
                <TableCell>{row.employment}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell>{row.viev}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledContainer>
  )
}
export default Tablo
