import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    photo: { type: String, default: "" }, // Required remove karo, default empty string
    firstName: { type: String, default: "" }, // Optional ke liye default
    lastName: { type: String, default: "" }, // Optional ke liye default
    creditBalance: { type: Number, default: 2 },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;