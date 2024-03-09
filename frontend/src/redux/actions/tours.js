import * as api from '../api'

export const createTour=(tour,navigate)=>async(dispatch)=>{
    try {
        dispatch({type:"START_LOADING"})
        const {data}= await api.createTour(tour)
        dispatch({type:"CREATE",payload:data})
        navigate('/')
        dispatch({type:"END_LOADING"})
    } catch (error) {
        console.log(error)
    }
}
export const fetchTours=()=>async(dispatch)=>{
    try {
        dispatch({type:"START_LOADING"})
        const {data}= await api.fetchTours()
        console.log(data)
        dispatch({type:"FETCH_ALL",payload:data})
        dispatch({type:"END_LOADING"})
    } catch (error) {
        console.log(error)
    }
}
export const fetchTour=(id)=>async(dispatch)=>{
    try {
        dispatch({type:"START_LOADING"})
        const {data}= await api.fetchTour(id)
        dispatch({type:"FETCH",payload:data})
        dispatch({type:"END_LOADING"})
    } catch (error) {
        console.log(error)
    }
}
export const updateTour=(id,tour,navigate)=>async(dispatch)=>{
    try {
        dispatch({type:"START_LOADING"})
        const {data}= await api.updateTour(id,tour)
        dispatch({type:"UPDATE",payload:data})
        navigate('/dashboard')
        dispatch({type:"END_LOADING"})
    } catch (error) {
        console.log(error)
    }
}
export const deleteTour=(id,navigate)=>async(dispatch)=>{
    try {
        dispatch({type:"START_LOADING"})
        await api.deleteTour(id)
        dispatch({type:"DELETE",payload:id})
        navigate('/dashboard')
        dispatch({type:"END_LOADING"})
    } catch (error) {
        console.log(error)
    }
}