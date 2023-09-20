import User from "../models/user_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(201).send("User has been created");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not Found!"));

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_KEY
    );

    const iscompare = bcrypt.compareSync(req.body.password, user.password);
    if (!iscompare)
      return next(createError(400, "Wrong password or Username!"));

    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (error) {
    next(error);
  }
};
export const logout = async (req, res, next) => {
  try {
    res
      .clearCookie("accessToken", {
        samesite: "none",
        secure: true,
      })
      .status(200)
      .send("user has been log out!");
  } catch (error) {
    next(error);
  }
};
