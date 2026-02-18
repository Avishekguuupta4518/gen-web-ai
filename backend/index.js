import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import websiteRouter from "./routes/website.routes.js";
import billingRouter from "./routes/billing.routes.js";
import { stripeWebhook } from "./controllers/stripeWebHook.controller.js";

dotenv.config();

const app = express();
app.post(
  "/api/stripe/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook,
);
const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: "https://gen-web-ai-1.onrender.com",
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/website", websiteRouter);
app.use("/api/billing", billingRouter);
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  connectDB();
});
