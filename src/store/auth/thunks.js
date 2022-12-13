import  axios  from "axios";
import { useDispatch } from "react-redux";
import { personsApi, usersApi } from "../../api/axios";
import { checkingCredentials, login, logout ,registerSuccess} from "./authSlice"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


export const checkingAuthentication = (email,password)=>{

    return async(dispatch)=>{
        dispatch(checkingCredentials())
    }
}
export const startLoginWithEmailPassword=  ({user_name,password})=>{
    const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        }
      };
    return async (dispatch)=>{
        dispatch(checkingCredentials());
        await usersApi.post('/login', {user_name:user_name,
        password:password},config.headers)
            .then(response =>
                {
                localStorage.setItem('token',response.data.success)
                localStorage.setItem('token-init-date',new Date().getTime())
                console.log(response.data,'datos login')
                dispatch(login(response.data))
                })
            .catch(error=>dispatch(logout(error.response.data)))
    }
}
export const starRegister = (data)=>{
    return async(dispatch)=>{
            await personsApi.post('register',JSON.stringify(data))
                .then(response=>{
                    MySwal.fire({
                        title: <p>Usuario Creado</p>,
                        icon:'success'
                })})
                

                .catch(error=>dispatch(starRegister()))
    }
}
export const startLogOut=()=>{
    localStorage.clear();
    return (dispatch)=>{
        dispatch((logout('LogOut')))
    }  
}
export const checkAuthToken =  ()=>{
    const token = localStorage.getItem('token')

    if(!token){
        return (dispatch)=>{
            dispatch((logout('LogOut')))
        } 
    } 
    return async(dispatch)=>{
        await usersApi.get('/renew')
            .then(response=>  {
                localStorage.setItem('token',response.data.success)
                localStorage.setItem('token-init-date',new Date().getTime())
                dispatch(login(response.data))
                })
            .catch(error=>{
                localStorage.clear()
                dispatch(logout(error.response.data))})
    }
}