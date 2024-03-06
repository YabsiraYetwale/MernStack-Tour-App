import mongoose from 'mongoose'

const productSchema=new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
   image:{
        type:String,
    },
    category:{
        type:String
    },
    newPrice:Number,
    oldPrice:{
        type:Number,
    },
   available:{
        type:Boolean,
        default:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    creator:{
        type:String,
    },
    creatorname:{
        type:String,
    }
})
const Product=mongoose.model('Products',productSchema)
export default Product