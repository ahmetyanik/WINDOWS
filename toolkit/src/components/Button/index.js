import React from 'react'
import {
    StyledButtonBody,
    StyledButtonCancel,
    StyledButtonSave,
  } from './index.styles'

function Button() {
  return (
    <StyledButtonBody>
          <StyledButtonCancel
            className="cancel"
            variant="contained"
            onClick={() => console.log("cancel")}
          >
            CANCEL
          </StyledButtonCancel>
          <StyledButtonSave
            className="save"
            variant="contained"
            onClick={() => console.log("save")}
          >
            SAVE
          </StyledButtonSave>
    </StyledButtonBody>
  )
}

export default Button
