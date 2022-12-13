import { useSelect } from '@mui/base'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPage from '../../pages/AdminPage/AdminPage'
import CreatePlan from '../../pages/AdminPage/CreatePlan'
import CoachPage from '../../pages/CoachPage/CoachPage'
import EditPlan from '../../pages/AdminPage/EditPlan'
import ShowPlans from '../../pages/AdminPage/ShowPlans'
import CreateUser from '../../pages/CreateUser/CreateUser'
import Home from '../../pages/Home/Home'
import LogIn from '../../pages/LogIn/LogIn'
import { checkAuthToken } from '../../store/auth/thunks'
import { CheckingAuth } from '../../ui/components/CheckingAuth'
import AdminRoutes from './AdminRoutes'
import PrivateRoutes from './PrivateRoutes'
import PublicRouters from './PublicRouters'
import UsersRoutes from './UsersRoutes'
import CoachRoutes from './CoachRoutes'

export const PrincipalRoute = () => {
  const isLogged = true
  const {status,type} = useSelector(state=>state.auth)
 
  if(status==='checking'){
    return <h3>Cargando...</h3>
  }
  return (
        <Routes>
  <Route path ='/adminPage/*' element={
  <PrivateRoutes>
    <AdminRoutes/>
  </PrivateRoutes>}/>

  <Route path ='/coachPage/*' element={
     <PrivateRoutes>
     <CoachRoutes/>
   </PrivateRoutes>
  }/>

  <Route path = '/userPage/*' element={
  <PrivateRoutes><UsersRoutes/>
  </PrivateRoutes>}/>
  
  <Route path='/login' element = {<PublicRouters component = {LogIn} isLogged = {isLogged}/>}></Route>
  <Route path="/" element={<Home/>} />

  </Routes>
  )
}