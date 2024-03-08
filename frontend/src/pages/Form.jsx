import {Typography} from '@mui/material'
import { useParams } from 'react-router-dom'

const Form = () => {
    const {id}=useParams()
    const handleSubmit=(e)=>{
      e.preventDefault()
  }
  return (
    <>
    <div style={{display:'flex',flexDirection:'column',
    justifyContent:'center',alignItems:'center',
    gap:'20px',padding:'30px'}}>
       <div style={{display:'flex',flexDirection:'column',
    justifyContent:'center',alignItems:'center', boxShadow:'1px 1px 1px 1px rgba(0,0,0,0.5)',}}>
        <Typography variant='h4'>{id ? 'Edit Tour':'Add Tour'}</Typography>
        <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',
        gap:'20px',width:'500px',padding:'20px'}}>
            <input type="text" placeholder='title' style={{height:'40px'}}/>
            <textarea cols="30" rows="10"></textarea>
            <input type="text" placeholder='tags separated by comma ,' style={{height:'40px'}} />
            <input type="file" />
            <button style={{cursor:'pointer',height:'40px'}}>{id ? 'Edit':'Create'}</button>
        </form>
        </div>
    </div>
    </>
  )
}

export default Form