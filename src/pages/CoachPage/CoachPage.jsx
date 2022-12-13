import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import { SideBarDataCoach } from '../../components/SideBar/SideBarData'

const CoachPage = () => {
  return (
    <>
    <SideBar sidebarData={SideBarDataCoach}></SideBar>
    <div>CoachPage</div>
    </>
  )
}

export default CoachPage