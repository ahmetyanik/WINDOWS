import Box from '@mui/material/Box'
import { Modal as BasicModal, Backdrop } from '@mui/material'

import { StyledContainer, CloseButton, InBox } from './index.style'
import Button from '@mui/material/Button'

export default function Modal({ children, handleModalButton, open, handleModalOpen, btnName,style }) {
  return (
    <BasicModal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropComponent={Backdrop}
      onClose={handleModalOpen}
      sx={style}     
    >
      <StyledContainer>
        <Box className="box">
          <CloseButton onClick={handleModalOpen} />
          <InBox>{children}</InBox>
          <Button className="btn" variant="contained" onClick={handleModalButton}>
            {btnName}
          </Button>
        </Box>
      </StyledContainer>
    </BasicModal>
  )
}
