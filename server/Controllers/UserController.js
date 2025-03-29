import { Webhook } from "svix";
import userModel from "../Model/user.model.js";
import razorpay from "razorpay";
import transactionModel from "../Model/transactionModel.js";

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

    const { data, type } = req.body;
    console.log("Webhook event:", type, data);

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          photo: data.image_url || "", // Fallback to empty string if missing
          firstName: data.first_name || "", // Fallback to empty string
          lastName: data.last_name || "",
          creditBalance, // Fallback to empty string
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
        const deletedUser = await userModel.findOneAndDelete({
          clerkId: data.id,
        });
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

const userCredits = async (req, res) => {
  try {
    const { clerkId } = req.body;
    const userData = await userModel.findOne({ clerkId });

    res.json({ success: true, credits: userData.creditBalance });
    console.log("hiii credit");
    
  } catch (error) {
    console.log(error.message);
    res.send({ success: false, message: error.message });
  }
};

// initilise gateway

const razorpayInstance = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// API to make payment for credits

const paymentRazorpay = async (req, res) => {
  try {
    const { clerkId, planId } = req.body;
    const userData = await userModel.findOne({ clerkId });

    if (!userData || !planId) {
      return res.json({ success: false, message: "Invalid request" });
    }

    let credits, plan, amount, date;

    switch (planId) {
      case "Basic":
        plan = "Basic"; 
        credits = 100;
        amount = 10;
        break;
      case "Growth":
        plan = "Growth";
        credits = 500;
        amount = 50;
        break;
      case "Enterprise":
        plan = "Enterprise";
        credits = 5000;
        amount = 250;
        break;
      default:
    }

    date = Date.now();

    // creating Transcations

    const transactionData = {
      clerkId,
      plan,
      amount,
      credits,
      date,
    };

    const newTransaction = await transactionModel.create(transactionData);
    const options = {
      amount:amount*100,
      currency: "INR",
      receipt:newTransaction._id,
    }

    razorpayInstance.orders.create(options, (err, order) => {
      if (err) {
        console.log(err.message);
        return res.json({ success: false, message: err });
      }
      res.json({ success: true, order });
    })
  } catch (error) {
    console.log(error.message);
    res.send({ success: false, message: error.message }); 
  }
};

// API to verify razorpay payment

const verifyRazorpay = async (req,res) => {
  try {
    const {razorpay_order_id} = req.body

    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
    
    if(orderInfo.status === 'paid') {
      const transactionData = await transactionModel.findById(orderInfo.receipt);

      if(transactionData.payment) {
        return res.json({ success: false, message: "Payment failed" });
      }

      // Adding credits in user data

      const userData = await userModel.findOne({ clerkId: transactionData.clerkId });
      const creditBalance = userData.creditBalance + transactionData.credits;
      await userModel.findOneAndUpdate(userData._id, { creditBalance });

      // making payment true

      await transactionModel.findOneAndUpdate(transactionData._id, { payment: true });

      return res.json({ success: true, message: "Credit added" });
    }

   } catch (error) {
    console.log(error.message);
    res.send({ success: false, message: error.message });
  }
}

export { clerkWebhooks, userCredits , paymentRazorpay,verifyRazorpay};
