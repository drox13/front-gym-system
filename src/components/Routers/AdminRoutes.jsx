import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminPage from '../../pages/AdminPage/AdminPage'
import CreatePlan from '../../pages/AdminPage/CreatePlan'
import EditPlan from '../../pages/AdminPage/EditPlan'
import ShowPlans from '../../pages/AdminPage/ShowPlans'
import AssignPlan from '../../pages/AssignPlan/AssignPlan'
import CreateUser from '../../pages/CreateUser/CreateUser'
import Home from '../../pages/Home/Home'

const AdminRoutes = () => {


  return (
    <>
    <Routes>
        <Route path='/' element = {<AdminPage/>}/>
        <Route path='/createUser' element = {<CreateUser/>}/>
        <Route path='/createPlan' element = {<CreatePlan/>}/>
        <Route path ='/showPlans' element = {<ShowPlans/>}/>
        <Route path ='/assignPlan' element = {<AssignPlan/>}/>
        <Route path='/editPlan/:id_plan' element={ <EditPlan/>} />
    </Routes>
    </>
  
  )
}

export default AdminRoutes