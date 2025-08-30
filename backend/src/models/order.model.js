import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  table: { type: mongoose.Schema.Types.ObjectId, ref: "Table", required: true },
  items: [
    {
      menuId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu" },
      qty: { type: Number, required: true }
    }
  ],
  status: { type: String, enum: ["pending", "served"], default: "pending" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
