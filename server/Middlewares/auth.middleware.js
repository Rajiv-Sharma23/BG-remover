// import jwt from "jsonwebtoken";

// // middleware function to decode jwt token to get clerkId

// const authUser = async (req,res,next) => {
//     try {
//         const {token} = req.headers

//         if(!token) {
//             return res.json({success:false,message:"Not authorized token"});
//         }

//         const token_decode = jwt.decode(token) 
//         req.body.clerkId = token_decode.clerkId
//         next();
//     } catch (error) {
//         console.log(error.message);
//         res.send({success:false,message:error.message});
        
//     }
// }

// export default authUser;


import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const token = authorization && authorization.startsWith('Bearer ') ? authorization.slice(7) : null;

        if (!token) {
            return res.status(401).json({ success: false, message: "Not authorized, no token" });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
            req.body.clerkId = decoded.clerkId;
            next();
        } catch (error) {
            return res.status(401).json({ success: false, message: "Not authorized, token failed" });
        }
    } catch (error) {
        console.error("Error in authUser middleware:", error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};

export default authUser;