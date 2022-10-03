import React from 'react'
import { StyledContainer ,InContainer, Titel, Number } from './index.styles'

function DashboardCard({title, number}) {
  return (
    <StyledContainer>
        <InContainer>
            <Titel>
              {title}
            </Titel>
            <Number>
              {number}
            </Number>
        </InContainer>
    </StyledContainer>
  )
}

export default DashboardCard