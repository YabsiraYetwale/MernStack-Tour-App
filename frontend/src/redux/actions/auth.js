import * as api from '../api'

export const signUp=(user)=>async(dispatch)=>{
    try {
        dispatch({type:"START_LOADING"})
        const {data}= await api.signUp(user)
        console.log(data)
        dispatch({type:"AUTH",payload:data})
        dispatch({type:"END_LOADING"})
    } catch (error) {
        console.log(error)
    }
}
export const signIn=(user)=>async(dispatch)=>{
    try {
        dispatch({type:"START_LOADING"})
        const {data}= await api.signIn(user)
        console.log(data)
        dispatch({type:"AUTH",payload:data})
        dispatch({type:"END_LOADING"})
    } catch (error) {
        console.log(error)
    }
}