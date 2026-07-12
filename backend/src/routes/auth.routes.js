import { Router } from "express";
import AuthController from "../controllers/AuthController.js";

const router = Router();

const authController = new AuthController();

router.get("/", authController.test);

export default router;
