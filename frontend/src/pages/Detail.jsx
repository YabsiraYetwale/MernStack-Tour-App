import {tours} from '../components/utils'
import {Link} from 'react-router-dom'
import Comment from '../components/comments/Comment'
import RelatedTours from '../components/relatedTours/RelatedTours'
const Detail =()=> {
    return(
        <>
        <div style={{display:'flex',
           flexDirection:'column',
           position:'relative',borderRadius:'7px',
           padding:'0 40px 20px 40px',}}>
       { tours.slice(1,2).map((tour,i)=>(
           <div key={i} style={{display:'flex',
           flexDirection:'column',
           }}>
           <Link to={`/tour/${tour._id}`}/><img src={tour.image} alt='image' style={{width:'100%',height:'380px',borderTopLeftRadius:'7px',borderTopRightRadius:'7px'}}/>
            <div style={{padding:'0px 0px 40px 20px',}}>
            <div style={{fontWeight:'bolder',fontSize:'25px',
            padding:'30px 0px 10px 0px',textAlign:'center',
           }}>
            {tour.title}</div>
            <div style={{fontWeight:'bolder'}}>Created By: {tour.creator}</div>
                <div style={{display:'flex',gap:'8px'}}>
                    {tour.tags.map((tag,i)=>(
                    <div key={i}>
                        #{tag}
                    </div>
                ))}
                </div>
                <div>{tour.likes} Likes</div>
                <div>2 months ago</div>
            <div>{tour.description}</div>
            </div>
        </div>))}
        <RelatedTours/>
       <Comment/>
        </div>
        </>
    )
}
export default Detail