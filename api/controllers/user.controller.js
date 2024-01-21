import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from "../models/user.models.js";

const test = (req, res) => {
  res.json({
    message: "Hello World",
  });
};
export default test;

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your account"));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avater: req.body.avater,
        },
      },
      { new: true }
    );
    const {password, ...rest} = updatedUser._doc
    res.status(200).json(rest)
  } catch (error) {
    next(error);
  }
};
