// import express from "express";
// import { clerkWebhooks, paymentRazorpay, userCredits, verifyRazorpay } from "../Controllers/UserController.js";
// import authUser from "../Middlewares/auth.middleware.js";

// const userRouter = express.Router();

// userRouter.post("/webhooks",clerkWebhooks);
// userRouter.get("/credits",authUser,userCredits);
// userRouter.post("/pay-razor",authUser,paymentRazorpay)
// userRouter.post("/verify-razor",verifyRazorpay)
// export default userRouter;

import express from "express";
import { clerkWebhooks, paymentRazorpay, userCredits, verifyRazorpay } from "../Controllers/UserController.js";
import authUser from "../Middlewares/auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/webhooks", clerkWebhooks);

// Apply authUser middleware to GET requests for /credits
userRouter.get("/credits", authUser, userCredits);

// Handle OPTIONS requests for /credits without authentication
userRouter.options("/credits", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://bg-remover-8sgc.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.sendStatus(204); // Respond to preflight
});

userRouter.post("/pay-razor", authUser, paymentRazorpay);
userRouter.post("/verify-razor", verifyRazorpay);

export default userRouter;