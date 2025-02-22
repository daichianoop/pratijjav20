/** @format */

import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect"; // Ensure your MongoDB connection helper is set up
import Form4Model from "@/models/form4"; // Adjust the path if needed

// POST handler for Form4 submissions
export async function POST(request: Request) {
	try {
		// Connect to MongoDB
		await dbConnect();

		// Parse the JSON body from the request
		const formData = await request.json();

		// Create a new document using the Form4 model
		const newFormEntry = new Form4Model(formData);
		await newFormEntry.save();

		// Return a JSON response with status 201 (Created)
		return NextResponse.json(
			{ success: true, data: newFormEntry },
			{ status: 201 }
		);
	} catch (error: any) {
		// Return an error response with status 500 (Internal Server Error)
		return NextResponse.json(
			{ success: false, error: error.message },
			{ status: 500 }
		);
	}
}
