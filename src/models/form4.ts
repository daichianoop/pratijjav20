/** @format */

import { Schema, Document, model } from "mongoose";

// Define an interface for IA/SA application
interface Form4 extends Document {
	name: string;
	email: string;
	contact: string;
	institution: string;
	speakingCredentials?: string;
	judgingCredentials?: string;
	accommodation: boolean;
}

// Define the schema for IA/SA application
const Form4Schema = new Schema<Form4>(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		contact: { type: String, required: true }, // Renamed from "phone" to match Form3
		institution: { type: String, required: true },
		speakingCredentials: { type: String },
		judgingCredentials: { type: String },
		accommodation: { type: Boolean, required: true },
	},
	{ timestamps: true }
);

// Create and export the model
const Form4Model = model<Form4>("Form4", Form4Schema);

export default Form4Model;
