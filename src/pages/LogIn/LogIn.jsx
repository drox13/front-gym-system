import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import './LogIn.css'
import pic from "../../icons/programmer.png";
import {useRef,useState,useEffect} from 'react'
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";
import { useForm } from "../../helpers/useForm";
import {useDispatch, useSelector} from 'react-redux'
import { checkingAuthentication, startLoginWithEmailPassword } from "../../store/auth/thunks";
import {Alert,Grid}from '@mui/material'
import {  useNavigate } from "react-router-dom";
const LogIn =()=>{
  const nav = useNavigate()
  const {status,type,errorMessage} =  useSelector(state=>state.auth)
  
  const dispatch = useDispatch();//Permite hacer dispatch de acciones en cualquier lugar
    const [formValues, handleInputChange] = useForm({
      name:'',
      password:''
    });
 
 // const isAuthenticating = useMemo(()=>status === 'checking',[status])
  const {user_name,password} = formValues

  useEffect(()=>{
    switch(type){
      case 'Ad':
        nav('/adminPage')
        break
      case 'En':
        nav('/coachPage/createTest')
        break
      case 'Cl':
        nav('/userPage/showTests')
        break
      default:
        console.log('Role no encontrado')
        break
    }
  },[status])
   const onLogin = (event)=>{
    event.preventDefault()
     dispatch(startLoginWithEmailPassword({user_name,password}))
    console.log(status)
   
   }
    return <>
      <NavBar />
      <div className="form-padre">
      <div className="form-children">  
        <div className="formContent">
          <div className="fadeIn first">
            <img src={pic} className="SampleImage" id="icon" alt="User Icon" />
          </div>
          <form onSubmit={onLogin}>
            <input type="text" id="username"  className="fadeIn second" name="user_name" placeholder="User name" value={user_name} onChange={handleInputChange}/>
            <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" value={password} onChange={handleInputChange}  />
            <Grid container>
                <Grid item
                  xs={12}
                  display = {!!errorMessage ? '':'none'}>
                  <Alert severity ='error'>{errorMessage}</Alert>
                </Grid>
                <br></br>
            </Grid>
            <button className="button-login" type="submit"  >Login</button>
          </form>
         
        </div>
      </div>
      </div>
    </>
}
export default LogIn