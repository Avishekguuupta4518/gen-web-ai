import { PLANS } from "../config/plan.js";
import stripe from "../config/stripe.js";

export const billing = async (req, res) => {
  try {
    const { planType } = req.body;
    const userId = req.user._id.toString();

    const plan = PLANS[planType];

    // Guardrails
    if (!plan || plan.price === 0) {
      return res.status(400).json({
        message: "Invalid paid plan",
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "inr", // ✅ fixed
            product_data: {
              name: `GenWeb.ai ${planType.toUpperCase()} Plan`,
            },
            unit_amount: plan.price * 100, // ✅ fixed (was plan.plan)
          },
          quantity: 1,
        },
      ],

      metadata: {
        userId: userId.toString(),
        credits: plan.credits,
        plan: planType,
      },

      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/pricing`,
    });

    return res.status(200).json({
      successUrl: session.url,
    });
  } catch (error) {
    console.error("Billing error:", error);

    return res.status(500).json({
      message: "Billing failed",
    });
  }
};
