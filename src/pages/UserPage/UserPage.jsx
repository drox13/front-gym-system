import { useSelect } from '@mui/base'
import React from 'react'
import { useSelector } from 'react-redux'
import SideBar from '../../components/SideBar/SideBar'
import { SideBarDataClient } from '../../components/SideBar/SideBarData'

const UserPage = () => {
  return (
    <>
    <SideBar sidebarData = {SideBarDataClient}/>
    <div>UserPage</div>
    </>
  )
}

export default UserPage