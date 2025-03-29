import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("Database connected");
        })
        const conect = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`MongoDB connected successfully- ${conect.connection.host}`);
    } catch (error) {
        console.log(error);
    }
};