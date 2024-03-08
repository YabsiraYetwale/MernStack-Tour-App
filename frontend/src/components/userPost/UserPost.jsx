import { Delete, Edit} from '@mui/icons-material'
import {Link} from 'react-router-dom'
const UserPost=({dashboard})=>{
    return(
        <>
        <div style={{display:'flex',position:'relative',borderRadius:'7px'}}>
            <img src={dashboard.image} alt='image' style={{width:'300px',height:'200px',borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}}/>
            <div style={{padding:'20px 0px 0px 20px',}}>
            <div style={{fontWeight:'bolder',fontSize:'25px',paddingBottom:'10px'}}>{dashboard.title}</div>
            <div style={{position:'absolute',top:'20px',left:'20px',color:'#fff',fontWeight:'bolder',fontSize:'25px'}}>{dashboard.creator}</div>
               <div style={{display:'flex',justifyContent:'space-between',color:'#345656'}}>
            <div style={{width:'350px'}}>{dashboard.description} 
            <Link to={`/tour/${dashboard._id}`} style={{textDecoration:'none'}}>
                Read More
                </Link>
                </div>
                <div style={{display:'flex',cursor:'pointer'}}>
                    <Delete style={{color:'red'}}/>
                    <Link to={`/edit/${dashboard._id}`}>
                        <Edit style={{color:'blue'}}/>
                    </Link>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default UserPost