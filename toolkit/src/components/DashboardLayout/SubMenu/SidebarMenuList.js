import React from 'react'
import { RiBarChart2Fill } from 'react-icons/ri'
import { FaUserCircle, FaTrophy, FaChevronRight, FaChevronDown } from 'react-icons/fa'
import { BsArrowRepeat } from 'react-icons/bs'
import { MdDashboard, MdSettings } from 'react-icons/md'
import { CgLogOut } from 'react-icons/cg'

export const SidebarMenuList = [
  {
    text: 'Dashboard',
    icon: <MdDashboard />,
    path: '/dashboard',
  },
  {
    text: 'Profile',
    icon: <FaUserCircle />,
    path: '/profile',
  },
  {
    text: 'Activity',
    icon: <RiBarChart2Fill />,
    path: '/activity',
    iconClosed: <FaChevronRight />,
    iconOpened: <FaChevronDown />,

    subNav: [
      {
        text: 'Saved Jobs',
        path: '/activity/savedjobs',
      },
      {
        text: 'Applied Jobs',
        path: '/activity/appliedjobs',
      },
    ]
  },
  {
    text: 'Ongoing Process',
    icon: <BsArrowRepeat />,
    path: '/ongoing',
    
  },
  {
    text: 'Referrals',
    icon: <FaTrophy />,
    path: '/referrals',
    iconClosed: <FaChevronRight />,
    iconOpened: <FaChevronDown />,

    subNav: [
      {
        text: 'Refer Candidate',
        path: '/referrals/refercandidate',
      },
      {
        text: 'Refer Client',
        path: '/referrals/1',
      },
      {
        text: 'My Referrals',
        path: '/referrals/',
      },
    ],
  },
  {
    text: 'Settings',
    icon: <MdSettings />,
    path: '/',
  },
  {
    text: 'Log out',
    icon: <CgLogOut />,
    path: '/',
  },
]
