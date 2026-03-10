import express from "express";
import Submission from "../models/Submission.js";
import Problem from "../models/Problem.js";
import User from "../models/User.js";
import { executeCode } from "../utilities/execute.js";

const router = express.Router();

// POST /submissions - Submit code solution
router.post("/", async (req, res, next) => {
    try {
        const { user_id, problem_id, code, language, customTestCases } = req.body;

        const problem = await Problem.findById(problem_id);
        if (!problem) return res.status(404).json({ error: "Problem not found" });

        // Merge database test cases with user-provided custom test cases
        const allTestCases = [...problem.test_cases, ...(customTestCases || [])];

        // Run the code with the merged test cases
        const { passed, total, status, errorMessage } = executeCode(code, allTestCases);

        // Save the submission
        let newSubmission = await Submission.create({
            user_id,
            problem_id,
            code,
            language,
            status,
            test_cases_passed: passed,
            test_cases_total: total
        });

        await User.findByIdAndUpdate(user_id, { $inc: { problems_attempted: 1 } });
        if (status === "passed") {
            await User.findByIdAndUpdate(user_id, { $inc: { problems_solved: 1 } });
        }

        res.json({ submission: newSubmission, errorMessage });
    } catch (err) {
        next(err);
    }
});

// GET /submissions/:submission_id - Retrieve submission details
router.get("/:submission_id", async (req, res, next) => {
    try {
        let submission = await Submission.findById(req.params.submission_id);
        if (!submission) return res.status(404).json({ error: "Submission Not Found" });
        res.json(submission);
    } catch (err) {
        next(err);
    }
});

// GET /submissions/user/:user_id - Retrieve all submissions by user
router.get("/user/:user_id", async (req, res, next) => {
    try {
        let userSubmissions = await Submission.find({ user_id: req.params.user_id }).sort({ submitted_at: -1 });
        res.json(userSubmissions);
    } catch (err) {
        next(err);
    }
});

// GET /submissions/problem/:problem_id - Retrieve all submissions for a problem
router.get("/problem/:problem_id", async (req, res, next) => {
    try {
        let probSubmissions = await Submission.find({ problem_id: req.params.problem_id }).sort({ submitted_at: -1 });
        res.json(probSubmissions);
    } catch (err) {
        next(err);
    }
});

export default router;