import React from 'react'
import { SidebarMenuList } from './SubMenu/SidebarMenuList'
import CssBaseline from '@mui/material/CssBaseline'
import Footer from '../Footer'
import Header from '../Header'
import {
  StyledContainer,
  StyledAppBar,
  StyledBox,
  StyledMain,
  StyledDrawer,
  StyledList,
  StyledOutletContainer,
} from './index.styles'
import { Outlet } from 'react-router-dom'
import SubMenu from './SubMenu/SubMenu'

export default function DashboardLayout() {
  return (
    <StyledContainer>
      <StyledBox>
        <CssBaseline />
        <StyledAppBar>
          <Header />
        </StyledAppBar>
        <StyledDrawer>
          <StyledList>
            {SidebarMenuList.map((item, index) => {
              return <SubMenu item={item} key={index} />
            })}
          </StyledList>
        </StyledDrawer>
        <StyledMain>
          <StyledOutletContainer>
            <Outlet />
          </StyledOutletContainer>
        </StyledMain>
      </StyledBox>
      <Footer />
    </StyledContainer>
  )
}
