import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  problems_attempted: { type: Number, default: 0 },
  problems_solved: { type: Number, default: 0 },

  settings: {
    time_limit: { type: Number, default: 30 }, // in minutes
    dark_mode: { type: Boolean, default: true },
    default_language: { type: String, default: "javascript" }
  }
});

export default mongoose.model("User", userSchema);