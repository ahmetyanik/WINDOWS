import { StyledAllHeaderElements, StyledHeader } from './index.styles'
import {  Stack, Typography } from '@mui/material'
// import { IconButton, InputBase, Stack, Typography } from '@mui/material'
// import { Search } from '@mui/icons-material'
import CustomizedMenus from './Dropdown'
// import StyledPaper from './StyledPaper'
import { useEffect, useState } from 'react'
import BackgroundLetterAvatars from './HeaderAvatar'
import NotificationIconWithBadge from './NotificationIconWithBadge'

const initialUserData = { firstName: '', lastName: '', roles: [''] }

export default function ButtonAppBar() {
  const [userData, setUserData] = useState(initialUserData)
  const [role, setRole] = useState('')
  const userRole = userData?.roles?.length > 0 ? userData?.roles[0]?.toUpperCase() : ''
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem('user')) || initialUserData)
  }, [])

  useEffect(() => {
    if (userData?.roles?.includes('PARTNER')) {
      setRole('PARTNER')
    } else if (userData?.roles?.includes('CLIENT')) {
      setRole('CLIENT')
    } else if (userData?.roles?.includes('CANDIDATE')) {
      setRole('CANDIDATE')
    } else {
      setRole('USER')
    }
  }, [userData])

  return (
    <StyledHeader
      sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        boxShadow:
          '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
        height: '64px',
      }}
    >
      <StyledAllHeaderElements>
        {/* <StyledPaper width={200}>
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <Search sx={{ color: 'white' }} />
          </IconButton>

          <InputBase
            sx={{ ml: 1, flex: 1, color: 'white' }}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
        </StyledPaper> */}

        <NotificationIconWithBadge />

        <BackgroundLetterAvatars
          name={(userData?.firstName + ' ' + userData?.lastName)?.toUpperCase() || ''}
        />
        <Stack direction="column" sx={{ ml: '16px', mt: '16px', mb: '16px' }}>
          <Typography
            sx={{
              pl: '0px',
              mb: '4px',
              fontFamily: 'Roboto',
              fontWeight: '500',
              fontSize: '10px',
              lineHeight: '10px',
              letterSpacing: '1.5px',
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            {userRole}
          </Typography>
          <CustomizedMenus
            name={(userData?.firstName || '') + ' ' + (userData?.lastName || '')}
            role={role}
          />
        </Stack>
      </StyledAllHeaderElements>
    </StyledHeader>
  )
}
