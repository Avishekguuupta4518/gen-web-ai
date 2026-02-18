import mongoose from "mongoose";

// Message schema for AI/user conversation
const messageSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["ai", "user"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }, // timestamps go here, not inside 'content'
);

// Website schema
const websiteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      default: "Untitled Website",
    },
    latestCode: {
      type: String,
      required: true,
    },
    conversation: [messageSchema], // array of messages
    deployed: {
      type: Boolean,
      default: false,
    },
    deployUrl: {
      type: String,
    },
    slug: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
  { timestamps: true },
);

const Website = mongoose.model("Website", websiteSchema);
export default Website;
