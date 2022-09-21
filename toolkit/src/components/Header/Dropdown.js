import * as React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Logout, People, Person } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: '#701d9f',
        color: 'white',
      },
    },
  },
}))

export default function CustomizedMenus({ name, role }) {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          backgroundColor: '#701d9f',
          padding: '0px',
          color: 'rgba(255, 255, 255, 0.87)',
          letterSpacing: '0.15px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '16px',
        }}
      >
        {name}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          disableRipple
          sx={{
            border: '1px solid gray',
            borderRadius: '20px',
            color: '#701d9f',
            margin: '10px',
          }}
        >
          <Person color="white" />
          Profile
        </MenuItem>
        {role.toUpperCase() !== 'CANDIDATE' && (
          <MenuItem
            onClick={handleClose}
            disableRipple
            sx={{
              border: '1px solid gray',
              borderRadius: '20px',
              color: '#701d9f',
              margin: '10px',
            }}
          >
            <People />
            Contact Us
          </MenuItem>
        )}

        <MenuItem
          onClick={() => {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            localStorage.removeItem('candidateId')
            handleClose()
            navigate('/')
          }}
          disableRipple
          sx={{
            border: '1px solid gray',
            borderRadius: '20px',
            color: '#701d9f',
            margin: '10px',
          }}
        >
          <Logout />
          Log Out
        </MenuItem>
      </StyledMenu>
    </div>
  )
}
