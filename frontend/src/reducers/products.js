import { CREATE, DELETE, END_LOADING, FETCH_ALL, FETCH, START_LOADING, UPDATE} from "../components/actionTypes";
const products=(state={isLoading:true,products:[]},action)=>{
    switch (action.type) {
        case START_LOADING:
           return {...state,isLoading:true}
        case END_LOADING:
           return {...state,isLoading:false}
        case CREATE:
           return {...state,products:[...state.products,action.payload]}
        case FETCH_ALL:
           return action.payload
        case FETCH:
           return action.payload
        case UPDATE:
           return {...state,products:state?.products?.map((product)=>product._id === action.payload._id ? action.payload : state)}
        case DELETE:
           return {...state,products:state?.products?.filter((product)=>product._id !== action.payload)}
        default:
            return state;
    }
}

export default products