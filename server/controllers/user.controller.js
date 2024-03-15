import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";

export const signUp = async (req, res) => {
  try {
    const { firstname, lastname, email, password, confirmpassword } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.json({ message: "User already exists!" });
    if (password !== confirmpassword)
      return res.json({ message: "password doesn't match!" });
    const hashPassword = await bcrypt.hash(password, 12);
    const hashConfirmPassword = await bcrypt.hash(confirmpassword, 12);
    const result = await User.create({
      firstname,
      lastname,
      email,
      password: hashPassword,
      confirmpassword: hashConfirmPassword,
    });
    const token = jwt.sign(
      { email: result.email, id: result._id },
      "secretKey"
    );
    res.json({ result, token });
  } catch (error) {
    res.json({ error: error });
  }
};
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) return res.json({ message: "User doesn't exist!" });
    const isPassword = await bcrypt.compare(password, existingUser.password);
    if (!isPassword) return res.json({ message: "invalid credentials!" });
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "secretKey"
    );
    res.json({ result: existingUser, token });
  } catch (error) {
    res.json({ error: error });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res.json({ user });
  } catch (error) {
    res.json({ error: error });
  }
};
export const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.json({ user });
  } catch (error) {
    res.json({ error: error });
  }
};
