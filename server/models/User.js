import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: { type: String },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  confirmpassword: {
    type: String,
  },
  role: {
    type: String,
    default: "user",
  },
  id: {
    type: String,
  },
});

const User = mongoose.model("tourUsers", userSchema);

export default User;

const adminData = {
  firstname: "Yabsira", 
  lastname:"Yetwale",
  email: "yabsira.yetwale@gmail.com",
  role: "admin",
  password: bcrypt.hashSync("1234", 6),
  confirmpassword: bcrypt.hashSync("1234", 6),
};

User.findOneAndUpdate({ email: adminData.email }, adminData, {
  upsert: true,
  new: true,
})
  .then((updatedAdmin) => {
    // console.log('Admin saved/updated successfully:', updatedAdmin);
  })
  .catch((error) => {
    console.error("error", error);
  });
