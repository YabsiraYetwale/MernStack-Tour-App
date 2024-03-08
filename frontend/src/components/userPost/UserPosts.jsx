import {useSelector} from 'react-redux'
import UserPost from './UserPost'
const UserPosts=()=> {
    const {tours}=useSelector(state=>state.tours)
    return(
        <>
         <div style={{display:'flex',flexDirection:'column',
         justifyContent:'center',
         alignItems:'center',flexWrap:'wrap',gap:'2rem',
         width:'100%',
         }}>
            {tours?.map((dashboard,i)=>(
                <div key={i}>
                    <UserPost dashboard={dashboard}/>
                </div>
            ))}
        </div>

        </>
    )
}
export default UserPosts