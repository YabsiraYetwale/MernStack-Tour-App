export const tours=(state={isLoading:true,tours:[]},action)=>{
    switch (action.type) {
        case "START_LOADING":
            return {...state,isLoading:true}
        case "END_LOADING":
            return {...state,isLoading:false}
        case "CREATE":
            return {...state,...action.payload}
        case "FETCH_ALL":
            return {...state,...action.payload}
        case "FETCH":
            return {...state,...action.payload}
        case "SEARCH":
            return {...state,...action.payload}
        case "UPDATE":
            return {...state,tours:state?.tours?.map((tour)=>tour?._id === action?.payload?._id ? action.payload : state)}
        case "DELETE":
            return {...state,tours:state.tours.filter((tour)=>tour._id !== action.payload)}
        default:
            return state;
    }
}