import express from "express";
import { deleteUser, getUser, signIn, signUp } from "../controllers/user.controller.js";
const userRouter = express.Router();    

userRouter.post('/signup',  signUp)
userRouter.post('/signin',  signIn)
userRouter.get('/',  getUser)
userRouter.delete('/:id',  deleteUser)
export default userRouter;