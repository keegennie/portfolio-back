import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

const userSchema = new Schema({
  email: { type: String, require: true, unique: true },
  password: String,
  name: String,
  age: { type: Number, default: 0 },
  phone: { type: String, default: "010-0000-0000"},
  picture: { type: String, default: "none_picture.jpg" },
  picturePath: { type: String, default: "/default/" },
  token: String,
  provider: { type: String, default: "local" },
  createdAt: { type: String, default: getCurrentTime }, //현재시간 
  updatedAt: { type: String, default: getCurrentTime },
  //user: { type: ObjectId, ref: "User", require: true} 입력된 아이디가 없으니 주석처리
});

export default model("User", userSchema, "user")