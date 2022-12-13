import {createContext,useState} from 'react'
import React from 'react'
import { authReducer } from './AuthReducer';
import { useReducer } from 'react';
import { types } from '../types/Types';

const initialState = {
    logged:false
}

const AuthContext = createContext({});

export const AuthProvider = ({children})=>{
    const [state,dispatch] =useReducer(authReducer, initialState)
    const login = async(name='')=>{
        const action = {
            type:types.login,
            payload:name
        }
    dispatch(action)
    }
    return (
        <AuthContext.Provider value={{state,login:login}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext

