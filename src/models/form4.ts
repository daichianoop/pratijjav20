/** @format */

import mongoose, { Schema, Document, model } from "mongoose";

// Define an interface for IA / SA application
interface Form4 extends Document {
	name: string;
	phone: string;
	email: string;
	institution: string;
	speaking: boolean;
}

// Define the schema
const Form4Schema: Schema<Form4> = new Schema(
	{
		name: { type: String, required: true },
		phone: { type: String, required: true },
		email: { type: String, required: true },
		institution: { type: String, required: true },
		speaking: { type: Boolean, required: true },
	},
	{ timestamps: true }
);

// Create and export the model
const Form4Model = model<Form4>("Form4", Form4Schema);

export default Form4Model;
