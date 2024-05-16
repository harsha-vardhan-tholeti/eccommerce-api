import express from "express";
import { register } from "../controller/auth.controller.js";

const router = express.Router();

// Routing
// REGISTER || METHOD POST
router.post("/register", register);

export default router;
