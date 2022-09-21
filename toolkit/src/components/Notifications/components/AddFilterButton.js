import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { StyledButton } from '../index.styles'


function AddFilterButton() {
  return (
    <div>
      <StyledButton variant="outline" label="add filter" icon={<BsPlus />} />
    </div>
  )
}

export default AddFilterButton
