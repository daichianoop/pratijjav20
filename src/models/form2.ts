/** @format */

import { Schema, Document, model } from "mongoose";

// Define an interface for the second form data
interface Form2 extends Document {
	email: string;
	institution: string;
	name_poc1: string;
	contact_poc1: string;
	email_poc1: string;
	name_poc2?: string;
	contact_poc2?: string;
	email_poc2?: string;
	slots: number;
	ajudicator_slots: number;
	accomodation: boolean;
	message?: string;
}

// Define the schema for institutional team registeration
const Form2Schema: Schema<Form2> = new Schema(
	{
		email: { type: String, required: true },
		institution: { type: String, required: true },
		name_poc1: { type: String, required: true },
		contact_poc1: { type: String, required: true },
		email_poc1: { type: String, required: true },
		name_poc2: { type: String },
		contact_poc2: { type: String },
		email_poc2: { type: String },
		slots: { type: Number, required: true },
		ajudicator_slots: { type: Number, required: true },
		accomodation: { type: Boolean, required: true },
		message: { type: String },
	},
	{ timestamps: true }
);

// Create and export the model
const Form2Model = model<Form2>("Form2", Form2Schema);

export default Form2Model;
