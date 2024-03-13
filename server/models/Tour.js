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
        type:[String],
        default:[],
    },
    comments:[
       { 
        commentsId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'tourUsers',
          },
        comment:String,
        commentator:String,
        commentedAt:{
            type: Date,
            default: Date.now(),
        }
        }
        ],
    tags:[String],
    createdAt: {
        type: Date,
        default: Date.now(),
      },
    creator:{
        type:String,
    },
    creatorfname:String,
    creatorlname:String, 
})
const Tour=mongoose.model('tours',tourSchema)
export default Tour