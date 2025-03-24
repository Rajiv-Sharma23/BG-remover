import { Webhook } from "svix";
import userModel from "../Model/user.model.js";

const clerkWebhooks = async (req, res) => {
  // Api controller function to manage clerk users with database
  // http://localhost:5000/api/user/webhooks
  try {
    // create a Svix instance with clerk webhook secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body
    console.log("Webhook event:", type, data);

    switch (type) {
        case "user.created": {
          const userData = {
            clerkId: data.id,
            email: data.email_addresses[0].email_address,
            photo: data.image_url || "", // Fallback to empty string if missing
            firstName: data.first_name || "", // Fallback to empty string
            lastName: data.last_name || "", // Fallback to empty string
            // creditBalance automatically 5 set hoga default se
          };
  
          const newUser = await userModel.create(userData);
          console.log("User created in DB:", newUser);
          res.json({});
          break;
        }
        case "user.updated": {
          const userData = {
            email: data.email_addresses[0].email_address,
            photo: data.image_url || "",
            firstName: data.first_name || "",
            lastName: data.last_name || "",
          };
  
          const updatedUser = await userModel.findOneAndUpdate(
            { clerkId: data.id },
            userData,
            { new: true }
          );
          console.log("User updated in DB:", updatedUser);
          res.json({});
          break;
        }
        case "user.deleted": {
          const deletedUser = await userModel.findOneAndDelete({ clerkId: data.id });
          console.log("User deleted from DB:", deletedUser);
          res.json({});
          break;
        }
        default:
          res.json({});
          break;
      }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};




// Api functions to get available user credits data


const userCredits = async (req,res) => {
  try {
    const {clerkId} = req.body;
    const userData = await userModel.findOne({clerkId})

    res.json({success:true,credits:userData.creditBalance})
  } catch (error)  {
    console.log(error.message);
    res.send({success: false, message: error.message});
    
  }
}



export { clerkWebhooks ,userCredits};