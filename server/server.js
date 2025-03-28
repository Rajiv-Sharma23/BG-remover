import  "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./Configs/mongoDB.js";
import userRouter from "./Routes/user.route.js";
import imageRouter from "./Routes/image.route.js";


// app config
const port = process.env.PORT || 5000;
const app = express();
connectDB();

const corsOptions = {
    origin: '*',
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));  // Handle preflight requests


app.use(express.json());

// api routes
app.get("/", (req, res) => {
    res.status(200).send("Api is running successfully");
});
app.use("/api/user",userRouter)
app.use("/api/image",imageRouter)



app.listen(port, () => {
    console.log(`listening on port ${port}`);
   
});


