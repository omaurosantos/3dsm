import mongoose, { Schema, Document } from "mongoose";

interface IEvent extends Document {
  title: string;
  description?: string;
  date: Date;
  location: string;
  price: number;
}

const EventSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IEvent>("Event", EventSchema);
