import {Link, useParams} from 'react-router-dom'
import Comment from '../components/comments/Comment'
import RelatedTours from '../components/relatedTours/RelatedTours'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchTour,fetchTours} from '../redux/actions/tours'
import { img_url } from '../redux/api'
import { CircularProgress } from '@mui/material'
const Detail =()=> {
    const {id}=useParams()
    const dispatch=useDispatch()
    const {isLoading,tour,tours}=useSelector(state=>state.tours)
    const tags=tour?.tags
   
    useEffect(()=>{
   dispatch(fetchTour(id))
    },[id,dispatch])
    useEffect(()=>{
       if(tags) dispatch(fetchTours())
       },[dispatch])
    return(
        <>
     {isLoading ? <CircularProgress/>:
     <div style={{display:'flex',
           flexDirection:'column',
           position:'relative',borderRadius:'7px',
           padding:'0 40px 20px 40px',}}>
        <div  style={{display:'flex',
           flexDirection:'column',
           }}>
           <Link to={`/tour/${tour?._id}`}/><img src={`${img_url}${tour?.image}`} alt='image' style={{width:'100%',height:'380px',borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}}/>
            <div style={{padding:'0px 0px 40px 20px',}}>
            <div style={{fontWeight:'bolder',fontSize:'25px',
            padding:'30px 0px 10px 0px',textAlign:'center',
           }}>
            {tour?.title}</div>
            <div style={{fontWeight:'bolder'}}>Created By: {tour?.creator}</div>
                <div style={{display:'flex',gap:'8px'}}>
                    {tour?.tags?.map((tag,i)=>(
                    <div key={i}>
                        #{tag}
                    </div>
                ))}
                </div>
                <div>{tour?.likes} Likes</div>
                <div>2 months ago</div>
            <div>{tour?.description}</div>
            </div>
        </div>
        <RelatedTours/>
       <Comment/>
        </div>}
        </>
    )
}
export default Detail