import {tours} from '../utils'
import UserPost from './UserPost'
const UserPosts=()=> {
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