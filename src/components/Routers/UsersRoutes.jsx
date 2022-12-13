import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Stadistics from '../../pages/Estadistics/Stadistics'
import HealthyData from '../../pages/HealthyData/HealthyData'
import ShowTests from '../../pages/ShowTests/ShowTests'
import UserBillingHistory from '../../pages/UserBillingHistory/UserBillingHistory'
import UserPage from '../../pages/UserPage/UserPage'

const UsersRoutes = () => {
  return (
   <Routes>
        <Route path='/' element={<UserPage/>} />
        <Route path='/billingHistory' element={<UserBillingHistory/>}/>
        <Route path='/showTests' element={<ShowTests/>}/>
        <Route path = '/healthy' element = {<HealthyData/>}></Route>
        <Route path = '/stadistics' element = {<Stadistics/>}></Route>

   </Routes>
  )
}

export default UsersRoutes