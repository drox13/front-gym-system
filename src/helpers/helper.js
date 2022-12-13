const TOKEN_KEY = 'userToken'

export const login = ()=>{
    localStorage.setItem(TOKEN_KEY,'asdfasdfasdf12341234-1234')
}
export const logout = ()=>{
    localStorage.removeItem(TOKEN_KEY)
}
export const isLogIn=()=>{
    if(localStorage.getItem(TOKEN_KEY)){
        return true
    }
    return false
}