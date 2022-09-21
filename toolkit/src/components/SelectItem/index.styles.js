import styled from 'styled-components'
import { Select, FormControl } from '@mui/material'

export const StyledSelect = styled(Select)`
  width: 100%;
`

export const StyledFormControl = styled(FormControl)`
  width: 100%;
  label:not(.MuiInputLabel-shrink) {
    top: -8px;
  }
`
