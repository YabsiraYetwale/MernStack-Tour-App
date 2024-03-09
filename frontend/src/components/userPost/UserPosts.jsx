import { CircularProgress } from '@mui/material'
import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchTours } from '../../redux/actions/tours'
import UserPost from './UserPost'
const UserPosts=()=> {
    const {isLoading,tours}=useSelector(state=>state.tours)
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(fetchTours())
    },[dispatch])
    if (isLoading || !tours){
        return <div><CircularProgress/></div>
    }
    return(
        <>
         <div style={{display:'flex',flexDirection:'column',
         justifyContent:'center',
         alignItems:'center',flexWrap:'wrap',gap:'2rem',
         width:'100%',
         }}>
            {tours.map((dashboard,i)=>(
                <div key={i}>
                    <UserPost dashboard={dashboard}/>
                </div>
            ))}
        </div>

        </>
    )
}
export default UserPosts