import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const Auth=(req,res,next)=>{
    try {
        const token = req.headers.authorization.split(' ')[1]
        let verified
        if (token)
          verified= jwt.verify(token,'secret')
        req.userId= verified?.id
        next()
    } catch (err) {
        console.log(err)
    }
}

//Admin
export const isAdmin=async(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1]
    const verified=jwt.verify(token,'secret')
    const user=await User.findById(verified.id)
    if (user.role !== 'admin') {
       return res.status(401).json({message:'you are not an admin!'})
    }
    next()
  }