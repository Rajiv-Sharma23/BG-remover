import express from "express";
import { clerkWebhooks, paymentRazorpay, userCredits, verifyRazorpay } from "../Controllers/UserController.js";
import authUser from "../Middlewares/auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/webhooks",clerkWebhooks);
userRouter.get("/credits",authUser,userCredits);
userRouter.post("/pay-razor",authUser,paymentRazorpay)
userRouter.post("/verify-razor",verifyRazorpay)
export default userRouter;