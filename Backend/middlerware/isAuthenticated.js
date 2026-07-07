import jwt from "jsonwebtoken";
import { Auth } from "../schema/auth.schema.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.user;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please login first",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user
    const user = await Auth.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    // Store user in request
    req.user = user;

    next();
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};