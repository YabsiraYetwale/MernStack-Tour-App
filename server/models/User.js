import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role:{
    type:String,
    default:'user'
},
  cart: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
      },
      quantity: {
        type: Number,
        default: 1,
      },
      totalQuantity: {
        type: Number,
        default: 0,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now(),
  },
  id:{
    type:String
}
});

const User = mongoose.model('Users', userSchema);

export default User;

const adminData = {
  name: 'Yabsira Yetwale',
  email: 'yabsira.yetwale@gmail.com',
  role:'admin',
  password: bcrypt.hashSync('1234', 6),
};

User.findOneAndUpdate(
  { email: adminData.email },
  adminData,
  { upsert: true, new: true }
)
.then((updatedAdmin) => {
  // console.log('Admin saved/updated successfully:', updatedAdmin);
})
.catch((error) => {
  console.error('error', error);
});