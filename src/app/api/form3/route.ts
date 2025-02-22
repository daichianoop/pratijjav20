/** @format */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Form3Model from "@/models/form3";

// Define an interface for the form data corresponding to your Form3 schema
interface Form3Data {
	name: string;
	email: string;
	contact: string;
	institution: string;
	accomodation: boolean;
	message?: string;
}

export async function POST(request: NextRequest) {
	try {
		// Connect to the database
		await dbConnect();

		// Parse and type the JSON request data
		const formData: Form3Data = await request.json();

		// Create a new document using Form3Model
		const formEntry = new Form3Model(formData);
		const savedEntry = await formEntry.save();

		// Return a success response with the saved document
		return NextResponse.json({
			message: "Form data received successfully",
			data: savedEntry,
		});
	} catch (error) {
		console.error("Error processing form data:", error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
