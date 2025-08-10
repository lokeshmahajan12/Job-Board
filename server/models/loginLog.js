import mongoose from "mongoose";

const loginLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  email: String,
  loginTime: { type: Date, default: Date.now },
  ipAddress: String
});

export default mongoose.model("LoginLog", loginLogSchema);
