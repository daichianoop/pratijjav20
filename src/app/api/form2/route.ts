/** @format */

import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect"; // Make sure this file sets up your MongoDB connection
import Form2Model from "@/models/form2";

// POST handler for the API route
export async function POST(request: Request) {
	try {
		// Connect to MongoDB
		await dbConnect();

		// Parse the JSON body from the request
		const formData = await request.json();

		// Create a new Form2 document using the Mongoose model
		const newFormEntry = new Form2Model(formData);
		await newFormEntry.save();

		// Return a success response with the created document
		return NextResponse.json(
			{ success: true, data: newFormEntry },
			{ status: 201 }
		);
	} catch (error: any) {
		// Return an error response with status 500
		return NextResponse.json(
			{ success: false, error: error.message },
			{ status: 500 }
		);
	}
}
