import express from "express";
import Problem from "../models/Problem.js";

const router = express.Router();

// GET /problems - Retrieve all problems
router.get("/", async (req, res, next) => {
  try {
    let allProblems = await Problem.find({});
    res.json(allProblems);
  } catch (err) {
    next(err);
  }
});

// GET /problems/:problem_id - Retrieve single problem
router.get("/:problem_id", async (req, res, next) => {
  try {
    let problem = await Problem.findById(req.params.problem_id);
    if (!problem) return res.status(404).json({ error: "Problem Not Found" });
    res.json(problem);
  } catch (err) {
    next(err);
  }
});

export default router;