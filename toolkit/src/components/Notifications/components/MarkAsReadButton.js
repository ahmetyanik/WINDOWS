import React from 'react'
import { Text } from '../../../atoms'
import { AtomicButton } from '../../../pages/ChooseRolePage/index.styles'

function MarkAsReadButton() {
  return (
    <div>
      <AtomicButton
        className=""
        color="secondary"
        variant="contained"
        type="submit"
        handleClick
        label={
          <Text className="" type="Button" color="#FFFFFF">
            MARK AS READ
          </Text>
        }
      />
    </div>
  )
}

export default MarkAsReadButton
