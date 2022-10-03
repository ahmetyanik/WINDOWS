import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './index.style'
import { theme } from '../../styles/Colors'

const buttonTypesWithStyles = {
  contained: {
    backgroundColor: theme.primary,
    color: theme.white,
    borderRadius: '5px',
    border: '2px solid',
  },
  text: {
    backgroundColor: 'transparent',
    color: theme.primary,
    borderRadius: null,
    border: 'none',
  },
  outlined: {
    backgroundColor: theme.white,
    color: theme.primary,
    borderRadius: '5px',
    border: `1px solid ${theme.border}`,
  },
}
export default function Button({ label, className, type, icon, variant, handleClick, disabled }) {
  return (
    <StyledButton
      className={className}
      variant={buttonTypesWithStyles[variant]}
      type={type}
      icon={icon}
      onClick={handleClick}
      disabled={disabled}
    >
      {icon}
      <span>{label}</span>
    </StyledButton>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf([Object.keys(buttonTypesWithStyles)]),
}
