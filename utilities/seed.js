import mongoose from "mongoose";
import dotenv from "dotenv";
import Problem from "../models/Problem.js";
import User from "../models/User.js";
import problemsData from "./data.js";

dotenv.config();

const connectionStr = process.env.MONGO_URI || "mongodb://localhost:27017/coding_platform";

async function seedDatabase() {
  console.log("🚀 Starting Seed...");
  try {
    await mongoose.connect(connectionStr);
    console.log("✅ Connected to DB");

    // Clear existing problems to prevent duplicates
    await Problem.deleteMany({});
    console.log("✅ Deleted Previous Problems");

    // Clear users (optional: useful for fresh starts in dev)
    await User.deleteMany({});
    console.log("✅ Deleted Previous Users");

    // Insert new data
    await Problem.create(problemsData);
    console.log("✅ Added New Problems");

    console.log("🎉 Successfully Seeded!");
    process.exit(0);
  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
    process.exit(1);
  }
}

seedDatabase();