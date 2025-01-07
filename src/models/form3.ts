/** @format */

import mongoose, { Schema, Document, model } from "mongoose";

// Define an interface for the third form data
interface Form3 extends Document {
	name: string;
	email: string;
	contact: string;
	institution: string;
	accomodation: boolean;
	message?: string;
}

// Define the schema for independent adjudicator registeration

const Form3Schema: Schema<Form3> = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		contact: { type: String, required: true },
		institution: { type: String, required: true },
		accomodation: { type: Boolean, required: true },
		message: { type: String },
	},
	{ timestamps: true }
);

// Create and export the model
const Form3Model = model<Form3>("Form3", Form3Schema);

export default Form3Model;
