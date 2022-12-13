import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import {isLogIn} from '../../helpers/helper'
const PrivateRoutes = ({children}) => {
    const {status,type} = useSelector(state=>state.auth)
 
    // 
    return ((status ==='authenticated')?children:<Navigate to ='/'/>)
}

export default PrivateRoutes