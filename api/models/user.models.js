import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avater: {
      type: String,
      default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9FEaO6AF73M01af1T28R0YRANrVmzPtCs8q5N7YmGXQ&s"
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
