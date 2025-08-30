import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
  number: { type: Number, required: true, unique: true },
  capacity: { type: Number, default: 4 },
  status: { type: String, enum: ["free", "occupied"], default: "free" },
  qrCodeUrl: {type: String,default: null} // for customer scan
});

export default mongoose.model("Table", tableSchema);
