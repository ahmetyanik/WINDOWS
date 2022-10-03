import React, { useState } from 'react'
import { StyledFormControl, StyledTextField } from './index.styles'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import { IconButton, InputAdornment } from '@mui/material'

const TextField = ({
  id = 'text-field-input',
  type = 'text',
  name,
  label,
  mainClass,
  className,
  defaultValue,
  variant,
  endAdornment,
  color = 'secondary',
  helperText,
  error,
  autoComplete,
  placeholder,
  ...restProps
}) => {
  const [isVisible, setIsVisible] = useState(type === 'password' ? false : true)
  const handleClickShowPassword = () => {
    setIsVisible(!isVisible)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const ButtonIcon = (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {isVisible ? <BsEyeFill /> : <BsEyeSlashFill />}
      </IconButton>
    </InputAdornment>
  )
  const getType = () => {
    if (type === 'password' && !isVisible) return 'password'
    if (type === 'password' && isVisible) return 'text'
    return type
  }
  return (
    <StyledFormControl className={mainClass} variant="outlined">
      <StyledTextField
        className={className}
        name={name}
        type={getType()}
        id={id}
        label={label}
        defaultValue={defaultValue}
        variant={variant}
        color={color}
        InputProps={{
          endAdornment: type === 'password' ? ButtonIcon : endAdornment,
        }}
        helperText={helperText}
        error={error}
        autoComplete={autoComplete}
        placeholder={label ? '' : placeholder}
        {...restProps}
      />
    </StyledFormControl>
  )
}

export default TextField
