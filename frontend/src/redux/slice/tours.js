export const tours=(state={isLoading:true,tours:[],relatedTours:[]},action)=>{
    switch (action.type) {
        case "START_LOADING":
            return {...state,isLoading:true}
        case "END_LOADING":
            return {...state,isLoading:false}
        case "CREATE":
            return {...state,tours:action.payload}
        case "FETCH_ALL":
            return action.payload
        case "FETCH":
            return action.payload
        case "SEARCH":
            return action.payload
        case "UPDATE":
            return {...state,tours:state?.tours?.map((tour)=>tour?._id === action?.payload?._id ? action.payload : state)}
        case "DELETE":
            return {...state,tours:state.tours.filter((tour)=>tour._id !== action.payload)}
        default:
            return state;
    }
}