/** @format */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/contact";

// Define an interface for the form data corresponding to your Contact schema
interface ContactData {
	email: string;
	name: string;
	phone: string;
	issue: string;
}

export async function POST(request: NextRequest) {
	try {
		// Connect to the database
		await dbConnect();

		// Parse and type the JSON request data
		const formData: ContactData = await request.json();

		// Create a new document using the Contact model
		const contactEntry = new Contact(formData);
		const savedEntry = await contactEntry.save();

		// Return a success response with the saved document
		return NextResponse.json({
			message: "Contact data received successfully",
			data: savedEntry,
		});
	} catch (error) {
		console.error("Error processing contact data:", error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
