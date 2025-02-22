/** @format */

import { NextResponse } from "next/server";
import Contact from "@/models/contact"; // Adjust the path as necessary
import dbConnect from "@/lib/dbConnect"; // Ensure you have a helper to connect to MongoDB

export async function POST(req: Request) {
	try {
		// Connect to MongoDB
		await dbConnect();

		// Parse the JSON body from the request
		const body = await req.json();
		const { name, email, message, issue, phone } = body;

		// Validate input
		if (!name || !email || !message || !issue || !phone) {
			return NextResponse.json(
				{
					message:
						"All fields are required (name, email, message, issue, phone)",
				},
				{ status: 400 }
			);
		}

		// Create a new contact document
		const newContact = new Contact({
			name,
			email,
			message,
			issue,
			phone,
		});

		// Save the contact to the database
		await newContact.save();

		// Return a success response
		return NextResponse.json(
			{ message: "Contact saved successfully", data: newContact },
			{ status: 201 }
		);
	} catch (error: any) {
		console.error("Error saving contact:", error);
		// Return an error response without exposing sensitive error details
		return NextResponse.json(
			{ message: "Error saving contact" },
			{ status: 500 }
		);
	}
}
