import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SidebarLink, SidebarLabel, DropdownLink, SidebarIcon } from './SubMenu.styles'

const SubMenu = ({ item }) => {
  const location = useLocation()
  const [subnav, setSubnav] = useState(false)

  const showSubnav = () => setSubnav(!subnav)

  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={item.subNav && showSubnav}
        className={location.pathname === item.path ? 'active' : null}
      >
        <SidebarIcon>{item.icon}</SidebarIcon>
        <SidebarLabel>{item.text}</SidebarLabel>

        <div>{item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}</div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink
              to={item.path}
              key={index}
              className={location.pathname === item.path && 'active'}
            >
              <SidebarLabel>{item.text}</SidebarLabel>
            </DropdownLink>
          )
        })}
    </>
  )
}

export default SubMenu
