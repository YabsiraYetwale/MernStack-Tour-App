import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
const userRouter=express.Router()

userRouter.post('/signup',async(req,res)=>{
    try {
        const {name,cartData,email,password} =  req.body
        const existingUser = await User.findOne({email})
        if (existingUser) {
            return res.json({message: 'User already exists! Please enter your new email'})
        }
        const hashPassword = await bcrypt.hash(password,12)
        const user =new  User({name,cartData,email,password:hashPassword})
        await user.save()
        const token= jwt.sign({email:user.email,id:user._id},'secret')
        res.json({result:user,token})
    } catch (error) {
        res.json(error)
    }
})
userRouter.post('/signin',async(req,res)=>{
    try {
        const {email,password}=req.body
        const existingUser=await User.findOne({email})
        if (!existingUser) {
            return res.json({message: "User doesn't exist! Please first signUp"})
        }
        const isPassword=await bcrypt.compare(password,existingUser.password)
        if (!isPassword) {
           return res.json({message: "invalid credintials!"})
        }
        const token= jwt.sign({email:existingUser.email,id:existingUser._id},'secret')
        res.json({result:existingUser,token})
    } catch (error) {
        res.json(error)
    }
})

userRouter.get('/',async(req,res)=>{
    try{
       const users= await User.find()
        res.json({users})
    }catch(err){
        res.json(err)
    }
})
userRouter.patch('/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const user=req.body
       const updatedUser= await User.findByIdAndUpdate(id,user,{new:true})
        res.json({updatedUser})
    }catch(err){
       res.json(err)
    }
})
userRouter.delete('/:id',async(req,res)=>{
    try{
        const {id}=req.params
       const deletedUser= await User.findByIdAndDelete(id)
        res.json({deletedUser})
    }catch(err){
        res.json(err)
    }
})


export default userRouter