/** @format */

// app/api/form2/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Form2Model from "@/models/form2";

// Define an interface for the form data corresponding to your Form2 schema
interface Form2Data {
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

export async function POST(request: NextRequest) {
	try {
		// Connect to the database
		await dbConnect();

		// Parse and type the JSON request data
		const formData: Form2Data = await request.json();

		// Create a new document using Form2Model
		const formEntry = new Form2Model(formData);
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
