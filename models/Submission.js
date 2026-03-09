import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  problem_id: { type: mongoose.Schema.Types.ObjectId, ref: "Problem", required: true },
  code: { type: String, required: true },
  language: { type: String, default: "javascript" },
  status: { type: String, enum: ["passed", "failed", "pending"], default: "pending" },
  test_cases_passed: { type: Number, default: 0 },
  test_cases_total: { type: Number, default: 0 },
  execution_time: { type: Number, default: 0 }, // optional for now
  submitted_at: { type: Date, default: Date.now },
  feedback: { type: String, default: "" }
});

export default mongoose.model("Submission", submissionSchema);