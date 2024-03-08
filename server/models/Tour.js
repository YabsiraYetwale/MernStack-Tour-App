import mongoose from 'mongoose'

const tourSchema=new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
   image:{
        type:String,
    },
    likes:{
        type:Number,
        default:0,
    },
    tags:[String],
    createdAt: {
        type: Date,
        default: Date.now(),
      },
    creator:{
        type:String,
    },
    creatorname:{
        type:String,
    }
})
const Tour=mongoose.model('tours',tourSchema)
export default Tour