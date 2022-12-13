import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CoachPage from '../../pages/CoachPage/CoachPage'
import CreateExercise from '../../pages/CreateExercise/CreateExercise'
import CreateTest from '../../pages/CreateTest/CreateTest'
import Exercises from '../../pages/Exercises/Exercises'

const CoachRoutes = () => {
  return (
    <>
     <Routes>
        <Route path='/' element = {<CoachPage/>}/>
        <Route path='/createExercise' element = {<CreateExercise/>}/>
        <Route path='/createTest' element = {<CreateTest/>}/>
        <Route path = '/exercises' element = {<Exercises/>}></Route>
    </Routes>
    </>
  )
}

export default CoachRoutes