
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["User", "Admin"],
    default: "User", // Set default role
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  organization: { // Changed from yourFirstSchool
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  // New fields for the code-based password reset
  passwordResetCode: {
    type: String,
    default: undefined,
  },
  passwordResetExpires: {
    type: Date,
    default: undefined,
  },
});

export default mongoose.model("User", userSchema);