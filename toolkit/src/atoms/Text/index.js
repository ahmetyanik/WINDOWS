import React from 'react'
import StyledTexts from './index.styles'

export default function Text({ children, id, className, type, display, color, ...restProps }) {
  const StyledText = StyledTexts[type]

  if (!children) {
    return null
  }

  return (
    <StyledText id={id} className={className} display={display} color={color} {...restProps}>
      {children}
    </StyledText>
  )
}
