/** @format */

// app/api/form1/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Form1Model from "@/models/form1";

export async function POST(request: NextRequest) {
	try {
		await dbConnect();
		const formData = await request.json();
		const formEntry = new Form1Model(formData);
		const savedEntry = await formEntry.save();

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
