import { createSlice } from '@reduxjs/toolkit'
export const authSlice = createSlice({
    name:'auth',
    initialState:{
        status:'not-authenticated',//checking, not-authenticated, authenticated
        uid:null,
        document:null,
        type:null,
        user:null,
        errorMessage:null
    },
    reducers:{
        login:(state,{payload})=>{
            state.status='authenticated';//checking, not-authenticated, authenticated
            state.uid=payload.uid;
            state.type=payload.type;
            state.user=payload.user;
            state.document = payload.document
            state.errorMessage=null;
        },
        logout:(state,{payload})=>{
            state.status='not-authenticated';//checking, not-authenticated, authenticated
            state.uid=null;
            state.type=null;
            state.displayName=null;
            state.user=null;
            state.document = null

            state.errorMessage=payload.errorMessage;
        },
        checkingCredentials:(state)=>{
            state.status = 'checking';
        },
        register:(state,{payload})=>{
            state.status='register'
            state.errorMessage=payload.errorMessagge;
        },
        registerSuccess:(state)=>{
            state.status='register-success'
            state.errorMessage=null
        }
    }
})
export const {login,logout,checkingCredentials,registerSuccess} = authSlice.actions;

