import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: String,
  description: String,
  isAvailable: { type: Boolean, default: true }
});

export default mongoose.model("Menu", menuSchema);
