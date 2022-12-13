import React from 'react'
import { Navigate } from 'react-router-dom'
import isLogIn from '../../helpers/helper'
 const PublicRouters = ({component:Component,restricted,...rest}) => {

    return <Component {...rest}/>
}
export default PublicRouters
