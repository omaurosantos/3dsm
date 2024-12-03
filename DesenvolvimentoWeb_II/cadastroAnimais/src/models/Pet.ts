import mongoose, { Document, Schema } from 'mongoose';

export interface IPet extends Document {
  name: string;
  species: string;
  age: number;
  tutor: string;
  tutorContact?: string; // Opcional
}

const PetSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, required: true },
  tutor: { type: String, required: true },
  tutorContact: { type: String }
}, { timestamps: true });

export const Pet = mongoose.model<IPet>('Pet', PetSchema);
