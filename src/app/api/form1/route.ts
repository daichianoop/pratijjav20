/** @format */

// app/api/form1/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Form1Model from "@/models/form1";

// Define an interface for the form data corresponding to your model
interface Form1Data {
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
	accommodation: boolean; // updated spelling to match the model (if applicable)
	message?: string;
}

export async function POST(request: NextRequest) {
	try {
		// Connect to the database
		await dbConnect();

		// Parse and type the JSON request data
		const formData: Form1Data = await request.json();

		// Create a new document based on the form data
		const formEntry = new Form1Model(formData);
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
