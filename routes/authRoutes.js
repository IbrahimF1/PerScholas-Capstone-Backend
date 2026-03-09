import express from "express";
import bcrypt from "bcrypt";
import crypto from "crypto";
import User from "../models/User.js";
import Session from "../models/Session.js";

const router = express.Router();

// POST /auth/login - Authenticate user and return token
router.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });

        if (!user) return res.status(404).json({ error: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

        // Generate token and create session
        const token = crypto.randomBytes(32).toString("hex");
        const expires_at = new Date(Date.now() + 24 * 60 * 60 * 1000); // 1 day

        let session = await Session.create({ user_id: user._id, token, expires_at });

        res.json({ message: "Login successful", token: session.token, user_id: user._id });
    } catch (err) {
        next(err);
    }
});

// POST /auth/logout - Invalidate user session
router.post("/logout", async (req, res, next) => {
    try {
        const { token } = req.body;
        await Session.findOneAndDelete({ token });
        res.json({ message: "Logged out successfully" });
    } catch (err) {
        next(err);
    }
});

// POST /auth/refresh - Refresh access token
router.post("/refresh", async (req, res, next) => {
    try {
        const { token } = req.body;
        let session = await Session.findOne({ token });

        if (!session) return res.status(401).json({ error: "Invalid session" });

        // Extend expiration by 1 day
        session.expires_at = new Date(Date.now() + 24 * 60 * 60 * 1000);
        await session.save();

        res.json({ message: "Session refreshed", expires_at: session.expires_at });
    } catch (err) {
        next(err);
    }
});

export default router;