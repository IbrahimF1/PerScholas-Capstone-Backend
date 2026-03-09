import express from "express";
import { GoogleGenAI } from "@google/genai";

const router = express.Router();

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// POST /feedback - Get AI feedback for incorrect solution
router.post("/", async (req, res, next) => {
  try {
    const { code, problem_description, error_message } = req.body;


    const prompt = `You are a helpful coding tutor. A student is trying to solve this problem: "${problem_description}". 
    This is their code:
    ${code}
    
    It failed to pass the test cases. Execution Error (if any): ${error_message}. 
    Please provide a short, encouraging hint to nudge them in the right direction without giving them the exact answer. Keep it under 3 sentences.`;

    const result = await genAI.models.generateContent({
      model: "gemma-3-27b-it",
      contents: prompt,
    });


    const aiFeedback = result.text;

    res.json({ feedback: aiFeedback });
  } catch (err) {
    console.error("Gemini API Error:", err.message);
    res.status(500).json({ error: "Failed to fetch AI feedback. Check your API key or quota." });
  }
});

export default router;