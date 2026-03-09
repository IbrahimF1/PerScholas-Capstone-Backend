import mongoose from "mongoose";

const testCaseSchema = new mongoose.Schema({
  input: { type: String, required: true },
  output: { type: String, required: true }
});

const problemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, enum: ["Easy", "Medium", "Hard"], required: true },
  test_cases: [testCaseSchema],
  solution: { type: String, required: true },
  starter_code: { type: String, required: true }
});

export default mongoose.model("Problem", problemSchema);