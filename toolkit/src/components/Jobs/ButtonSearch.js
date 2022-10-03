import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

const ButtonSerach = () => {
  return (
    <Stack spacing={2} direction="row" className="search-button">
      <Button variant="contained">Search</Button>
      <Button variant="contained" className="search-add">
        Add filter
      </Button>
    </Stack>
  )
}

export default ButtonSerach
