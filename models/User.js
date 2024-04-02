import mongoose from "mongoose";

// Defining Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  employeeid: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  status: { type: Boolean, required: true },
  image: { type: String, default : 'default.jpg' }

})

// Model
const UserModel = mongoose.model("user", userSchema)

export default UserModel