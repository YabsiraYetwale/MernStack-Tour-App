import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.routes.js'
import productRouter from './routes/product.routes.js'

const app=express()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use('/images',express.static('upload/images'))
app.use('/users',userRouter)
app.use('/products',productRouter)
dotenv.config()

const PORT = process.env.PORT|| 4000;
const MONGODB_URL='mongodb+srv://yabsirayetwale:1234@cloth-shop.vo6yfy6.mongodb.net/?retryWrites=true&w=majority&appName=cloth-shop'

mongoose.connect(MONGODB_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

