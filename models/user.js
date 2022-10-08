import mongoose from "mongoose";
import pkg from "validator";
import bcrypt from "bcryptjs";

const { isEmail } = pkg;
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
      validate: [isEmail, "invalid email"],
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

UserSchema.methods.matchPassword = async function (givenPass) {
  return await bcrypt.compare(givenPass, this.password);
};

UserSchema.pre("save", async function (next) {
  const newUser = this;
  if (!newUser.isModified) {
    next();
  }

  console.log(newUser);
  const saltRounds = 10;
  newUser.password = await bcrypt.hash(newUser.password, saltRounds);
  console.log(newUser);
});

const User = mongoose.model("User", UserSchema);
export { User };
