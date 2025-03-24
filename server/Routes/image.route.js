import express from "express";

import upload from "../Middlewares/multer.js";
import authUser from "../Middlewares/auth.middleware.js";
import removeBgImage from "../Controllers/ImageController.js";


const imageRouter = express.Router() 

 imageRouter.post("/remove-bg",upload.single("image"),authUser,removeBgImage)


export default imageRouter;