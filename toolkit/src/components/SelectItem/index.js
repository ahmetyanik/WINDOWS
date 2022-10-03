import { InputLabel, MenuItem, FormHelperText } from '@mui/material'
import { StyledSelect, StyledFormControl } from './index.styles'

const SelectItem = ({
  className,
  labelId = 'select-label-id',
  inputId = 'select-input-id',
  label,
  name,
  menuItems,
  defaultValue,
  value,
  handleChange,
  multiple = false,
  error,
  helperText,
}) => {
  return (
    <StyledFormControl className={className} error={error}>
      <InputLabel id={labelId} color="secondary">
        {label}
      </InputLabel>
      <StyledSelect
        multiple={multiple}
        labelId={labelId}
        id={inputId}
        name={name}
        label={label}
        value={value}
        onChange={handleChange}
        color="secondary"
        defaultValue={defaultValue}
        error={error}
      >
        {menuItems?.map((item, index) => (
          <MenuItem key={index} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </StyledSelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </StyledFormControl>
  )
}

export default SelectItem
