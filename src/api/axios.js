import axios from "axios";
export const usersApi =  axios.create({
    baseURL:'http://54.152.251.221:3000/api/users'
})
usersApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
})
export const adminApi = axios.create({
    baseURL:'http://54.152.251.221:3000/api/admi'
})  
export const plansApi = axios.create({
    baseURL:'http://54.152.251.221:3000/api/plans'
})
export const personsApi =  axios.create({
    baseURL:'http://54.152.251.221:3000/persons/'
})
export const recordsApi = axios.create({
    baseURL:'http://54.152.251.221:3000/api/plans_records/'
})
export const exercisesApi = axios.create({
    baseURL:'http://54.152.251.221:3000/api/excercises/'
})
export const testApi = axios.create({
    baseURL:'http://54.152.251.221:3000/api/tests/'
})
export const body_data_api = axios.create({
    baseURL:' http://54.152.251.221:3000/api/body_data/'
})
export const testHistoryApi = axios.create({
    baseURL:'http://54.152.251.221:3000/api/tests_history/'

})
testHistoryApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
})
body_data_api.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
})
exercisesApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
})
recordsApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
}) 
plansApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
}) 
adminApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
}) 
personsApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
}) 