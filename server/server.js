import  "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./Configs/mongoDB.js";
import userRouter from "./Routes/user.route.js";


// app config
const port = process.env.PORT || 5000;
const app = express();
connectDB();

// middleware initialize
app.use(cors());
app.use(express.json());

// api routes
app.get("/", (req, res) => {
    res.status(200).send("Api is running");
});
app.use("/api/user",userRouter)


app.listen(port, () => {
    console.log(`listening on port ${port}`);
   
});


