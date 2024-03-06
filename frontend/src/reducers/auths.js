import { LOGOUT, AUTH, ADD_TO_CART, START_LOADING, END_LOADING, REMOVE_FROM_CART} from "../components/actionTypes";
export const auths=(state={auths:[]},action)=>{
    switch (action.type) {
        case START_LOADING:
            return {...state,isLoading:true}
         case END_LOADING:
            return {...state,isLoading:false}
        case AUTH:
           localStorage.setItem("user-auth",JSON.stringify({...action.payload}))
        return {...state,auths:[...state.auths,action.payload]}
        case ADD_TO_CART:
            localStorage.setItem("user-auth",JSON.stringify({...action.payload}))
            return {...state,auths:[...state.auths,action.payload]}
        case REMOVE_FROM_CART:
                localStorage.setItem("user-auth", JSON.stringify({ ...action.payload }));
                return { ...state, auths: [...state.auths, action.payload] };
        case LOGOUT:
         localStorage.clear()
           return {...state,auths:[...state.auths,null]}
        default:
            return state;
    }
}