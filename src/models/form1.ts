/** @format */

import mongoose, { Document, Schema, Model } from "mongoose";

export interface Form1 extends Document {
	team_name: string;
	speaker_1: string;
	email_1: string;
	contact_1: string;
	institution_1: string;
	speaker_2?: string;
	email_2?: string;
	contact_2?: string;
	institution_2?: string;
	speaker_3?: string;
	email_3?: string;
	contact_3?: string;
	institution_3?: string;
	accommodation: boolean;
	message?: string;
}

const FormSchema: Schema<Form1> = new mongoose.Schema(
	{
		team_name: { type: String, required: true },
		speaker_1: { type: String, required: true },
		email_1: { type: String, required: true },
		contact_1: { type: String, required: true },
		institution_1: { type: String, required: true },
		speaker_2: { type: String },
		email_2: { type: String },
		contact_2: { type: String },
		institution_2: { type: String },
		speaker_3: { type: String },
		email_3: { type: String },
		contact_3: { type: String },
		institution_3: { type: String },
		accommodation: { type: Boolean, required: true },
		message: { type: String },
	},
	{ timestamps: true }
);

// Check if the model exists, else create it
const Form1Model: Model<Form1> =
	mongoose.models.Form1 || mongoose.model<Form1>("Form1", FormSchema);

export default Form1Model;
