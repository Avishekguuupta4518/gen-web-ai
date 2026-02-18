import stripe from "../config/stripe.js";
import User from "../models/userModel.js";

export const stripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.SRTIPE_WEBHOOK_SECRET,
    );
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: `Webhook Error: ${error.message}`,
    });
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const userId = session.metadata.userId;
      const credits = Number(session.metadata.credits);
      const plan = session.metadata.plan;

      //  handle DB update here
      await User.findByIdAndUpdate(userId, {
        $inc: { credits },
        plan,
      });

      console.log("Payment success:", { userId, credits, plan });
    }

    return res.status(200).json({ received: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `Stripe webhook handler error: ${error}`,
    });
  }
};
