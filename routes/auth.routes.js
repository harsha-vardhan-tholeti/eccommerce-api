import express from "express";
import { login, register } from "../controller/auth.controller.js";

const router = express.Router();

// Routing
// REGISTER || METHOD POST
router.post("/register", register);
// LOGIN || METHOD POST
router.post("/login", login);

export default router;
