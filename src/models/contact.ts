/** @format */

import mongoose, { Document, Model, Schema } from "mongoose";

export interface Contact extends Document {
	email: string;
	name: string;
	phone: string;
	issue: string;
}

const contactSchema: Schema<Contact> = new mongoose.Schema({
	email: { type: String, required: true },
	name: { type: String, required: true },
	phone: { type: String, required: true },
	issue: { type: String, required: true },
});

const Contact: Model<Contact> =
	mongoose.models.Contact || mongoose.model<Contact>("Contact", contactSchema);

export default Contact;
