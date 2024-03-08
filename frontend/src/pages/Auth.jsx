import { Typography} from '@mui/material'
import React, { useState } from 'react'

const Auth= () => {
    const [isSignUp,setIsSignUp]= useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <>
    <div style={{display:'flex',flexDirection:'column',
    justifyContent:'center',alignItems:'center',
    gap:'20px',padding:'50px'}}>
    <div style={{display:'flex',flexDirection:'column',
    justifyContent:'center',alignItems:'center', boxShadow:'1px 1px 1px 1px rgba(0,0,0,0.5)',}}>
        <Typography variant='h4'>{isSignUp ? 'SignUp':'Login' }</Typography>
        <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',
        gap:'20px',width:'500px',padding:'20px'}}>
            <div style={{display:'flex',gap:'10px',justifyContent:'space-around'}}>
            { isSignUp &&  
            <>
            <input type="text" placeholder='first name' style={{width:'100%',height:'40px'}}/>
            <input type="text" placeholder='last name' style={{width:'100%',height:'40px'}}/>
            </>
            }
            </div>
            <input type="email" placeholder='email' style={{height:'40px'}}/>
           {isSignUp &&<input type="password" placeholder='password' style={{height:'40px'}}/>}
            <input type="password" placeholder='confirm password' style={{height:'40px'}}/>
            <button onClick={()=>setIsSignUp(!isSignUp)} style={{cursor:'pointer',height:'40px'}}>{isSignUp ? 'SignUp' :'Login'}</button>
            <div onClick={()=>setIsSignUp(!isSignUp)} style={{cursor:'pointer',textAlign:'center',color:'#407090'}}>{isSignUp ? "Don't have an account ? Sign Up" :'Already have an account ?Login'}</div>
        </form>
        </div>
    </div>
    </>
  )
}

export default Auth