import { Schema, model } from "mongoose";

const drugSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    favorite: { type: Boolean, required: true },
    foto: { type: String, required: false },
    shop: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Drug = model("drug", drugSchema);

export default Drug;
