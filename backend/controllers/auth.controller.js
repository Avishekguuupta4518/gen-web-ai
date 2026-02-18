import User from "../models/userModel.js";
import validator from "validator";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const googleAuth = async (req, res) => {
  try {
    const { name, email, avatar } = req.body;

    // Check required fields (Google auth → no password)
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Validate Email
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address.",
      });
    }

    // Check if user already exists
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email, avatar });
    } else {
      return res.status(409).json({
        success: false,
        message: "User already exists.",
      });
    }

    //  Check JWT Secret
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not found on server");
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: user._id.toString() },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `google auth error ${error.message}`,
    });
  }
};

export const logOut = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      expires: new Date(0),
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `logout error ${error.message}`,
    });
  }
};
