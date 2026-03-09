import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const router = express.Router();

// POST /user/profile - Register new user
router.post("/profile", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    let newUser = await User.create({ username, email, password_hash });
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

// GET /user/profile/:id - Retrieve user profile
router.get("/profile/:id", async (req, res, next) => {
  try {
    let user = await User.findById(req.params.id).select("-password_hash");
    if (!user) return res.status(404).json({ error: "User Not Found" });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// PUT /user/profile/:id - Edit profile
router.put("/profile/:id", async (req, res, next) => {
  try {
    let updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ error: "User Not Found" });
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
});

// PUT /user/settings/:id - Edit settings
router.put("/settings/:id", async (req, res, next) => {
  try {
    let updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { settings: req.body },
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ error: "User Not Found" });
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
});

// DELETE /user/profile/:id - Delete account
router.delete("/profile/:id", async (req, res, next) => {
  try {
    let deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: "User Not Found" });
    res.json({ message: "Account deleted" });
  } catch (err) {
    next(err);
  }
});

export default router;