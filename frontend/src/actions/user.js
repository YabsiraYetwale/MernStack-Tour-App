import * as api from '../api'
import { AUTH, FETCH_ALL} from '../components/actionTypes'

export const signUpUser=(user,history)=>async(dispatch)=>{
   try {
    const {data}=await api.signUpUser(user)
    dispatch({type:AUTH,payload:data})
    if (data?.result) {
      history('/')
    }
    else{
      alert("User already exists! Please enter your new email")
    }
   } catch (error) {
    console.log(error)
   }
}

export const signInUser=(user,history)=>async(dispatch)=>{   
   try {
    const {data}=await api.signInUser(user)
    dispatch({type:AUTH,payload:data})
    if (data?.result) {
      history('/')
    }
    else{
      alert("invalid credintials!")
    }
   } catch (error) {
    console.log(error)
   }
}



export const fetchUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    dispatch({ type: 'USER', payload: data });
  } catch (error) {
    console.log(error);
  }
};

