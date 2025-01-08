/** @format */

import mongoose, { Schema, Document, model } from "mongoose";

interface User extends Document {
	name: string;
	email: string;
	password: string;
}

const UserSchema: Schema<User> = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{ timestamps: true }
);

const UserModel = model<User>("User", UserSchema);

export default UserModel;
