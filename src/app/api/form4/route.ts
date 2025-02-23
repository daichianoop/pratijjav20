/** @format */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Form4Model from "@/models/form4";

// Define an interface for the form data corresponding to your updated Form4 schema
interface Form4Data {
	name: string;
	phone: string;
	email: string;
	institution: string;
	speakingCredentials: string;
	judgingCredentials: string;
	accommodation: boolean;
}

export async function POST(request: NextRequest) {
	try {
		// Connect to the database
		await dbConnect();

		// Parse and type the JSON request data
		const formData: Form4Data = await request.json();

		// Create a new document using Form4Model
		const formEntry = new Form4Model(formData);
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
