import styled from 'styled-components'
import { FormControl, TextField } from '@mui/material'

export const StyledFormControl = styled(FormControl)`
  display: inline;
  width: 100%;
`
export const StyledTextField = styled(TextField)`
  input:placeholder-shown {
    font-style: italic;
    font-size: 0.75rem;
  }
  input {
    padding: 0.875rem;
  }
  width: 100%;
  border-radius: 3px;
`

