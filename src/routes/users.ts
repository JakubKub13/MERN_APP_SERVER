import express from "express";
import * as UserController from "../controllers/users";
const router = express.Router();
import { requiresAuth } from "../middleware/auth";

router.get("/", requiresAuth, UserController.getAuthenticatedUser);

router.post("/signup", UserController.signup);

router.post("/login", UserController.login);

router.post("/logout", UserController.logout);

export default router;