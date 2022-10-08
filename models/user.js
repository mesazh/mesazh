import mongoose from "mongoose";
import pkg from "validator";
import bcrypt from "bcrypt";

const {isEmail} = pkg;
//creating user schema
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "can't be blank"],
    },
    username: {
      type: String,
      required: [true, "can't be blank"],
      unique: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      // validate: [isEmail, "invalid email"],
    },
    password: {
      type: String,
      required: [true, "can't be blank"],
    },
    picture: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    newMessages: {
      type: Object,
      default: {},
    },
    status: {
      type: String,
      default: "offline",
    },
  },
  { minimize: false }
);

// const User = mongoose.model("User", UserSchema);

export const User = mongoose.model('user', UserSchema);
