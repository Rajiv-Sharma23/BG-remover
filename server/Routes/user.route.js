import express from "express";
import { clerkWebhooks, userCredits } from "../Controllers/UserController.js";
import authUser from "../Middlewares/auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/webhooks",clerkWebhooks);
userRouter.get("/credits",authUser,userCredits);

export default userRouter;