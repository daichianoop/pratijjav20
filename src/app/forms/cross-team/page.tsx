/** @format */

"use client";
import React, { useState } from "react";

interface Speaker {
	name: string;
	email: string;
	contact: string;
	institution: string;
}

interface FormData {
	teamName: string;
	speakers: Speaker[];
	// Note: Even though our interface uses "accommodation", we'll map it to "accomodation" in the payload if needed.
	accommodation: boolean;
	message: string;
}

const RegistrationForm: React.FC = () => {
	const initialFormData: FormData = {
		teamName: "",
		speakers: [
			{ name: "", email: "", contact: "", institution: "" },
			{ name: "", email: "", contact: "", institution: "" },
			{ name: "", email: "", contact: "", institution: "" },
		],
		accommodation: false,
		message: "",
	};

	const [formData, setFormData] = useState<FormData>(initialFormData);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [responseMessage, setResponseMessage] = useState("");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		index?: number
	) => {
		const { name, type, value } = e.target;
		const checked = (e.target as HTMLInputElement).checked;

		if (index !== undefined) {
			setFormData((prev) => {
				const updatedSpeakers = [...prev.speakers];
				updatedSpeakers[index] = { ...updatedSpeakers[index], [name]: value };
				return { ...prev, speakers: updatedSpeakers };
			});
		} else {
			setFormData((prev) => ({
				...prev,
				[name]: type === "checkbox" ? checked : value,
			}));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setResponseMessage("");

		try {
			const res = await fetch("/api/form1", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					team_name: formData.teamName,
					// mapping speakers fields: assuming the API expects speaker_1, speaker_2, speaker_3
					speaker_1: formData.speakers[0].name,
					email_1: formData.speakers[0].email,
					contact_1: formData.speakers[0].contact,
					institution_1: formData.speakers[0].institution,
					speaker_2: formData.speakers[1].name,
					email_2: formData.speakers[1].email,
					contact_2: formData.speakers[1].contact,
					institution_2: formData.speakers[1].institution,
					speaker_3: formData.speakers[2].name,
					email_3: formData.speakers[2].email,
					contact_3: formData.speakers[2].contact,
					institution_3: formData.speakers[2].institution,
					// Map the client's "accommodation" field to the model's key (if needed, update here)
					accommodation: formData.accommodation,
					message: formData.message,
				}),
			});

			if (res.ok) {
				const data = await res.json();
				setResponseMessage("Form submitted successfully!");
				console.log("Response:", data);
				// Clear the form after successful submission
				setFormData(initialFormData);
			} else {
				setResponseMessage("There was an error submitting the form.");
				console.error("Submission error", res);
			}
		} catch (error) {
			setResponseMessage("There was an error submitting the form.");
			console.error("Error:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
			<h1 className="text-3xl font-bold mb-6 text-center">
				CROSS TEAM REGISTRATION
			</h1>

			<form
				onSubmit={handleSubmit}
				className="w-full max-w-3xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				{/* Team Name */}
				<div className="mb-4">
					<label
						htmlFor="teamName"
						className="block text-gray-700 text-sm font-bold mb-2">
						TEAM NAME
					</label>
					<input
						type="text"
						id="teamName"
						name="teamName"
						value={formData.teamName}
						onChange={handleChange}
						placeholder="Team Name"
						required
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>

				{/* Speakers Section */}
				<div className="mb-4">
					<h2 className="text-xl font-bold mb-2 text-center">Speakers</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{formData.speakers.map((speaker, index) => (
							<div key={index} className="p-4 border rounded shadow">
								<h3 className="text-lg font-semibold mb-2 text-center">
									SPEAKER - {index + 1}
								</h3>
								{Object.keys(speaker).map((field) => (
									<div key={field} className="mb-2">
										<input
											type={field === "email" ? "email" : "text"}
											name={field}
											value={String(speaker[field as keyof Speaker])}
											onChange={(e) => handleChange(e, index)}
											placeholder={
												field.charAt(0).toUpperCase() + field.slice(1)
											}
											required
											className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										/>
									</div>
								))}
							</div>
						))}
					</div>
				</div>

				{/* Accommodation */}
				<div className="mb-4 flex items-center justify-center">
					<label
						htmlFor="accommodation"
						className="mr-2 text-gray-700 text-sm font-bold">
						Need Accommodation?
					</label>
					<input
						type="checkbox"
						id="accommodation"
						name="accommodation"
						checked={formData.accommodation}
						onChange={handleChange}
						className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
					/>
				</div>

				{/* Message */}
				<div className="mb-6">
					<label
						htmlFor="message"
						className="block text-gray-700 text-sm font-bold mb-2">
						MESSAGE
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						placeholder="Anything else you would like us to know?"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>

				{/* Submit Button */}
				<div className="flex items-center justify-center">
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
						disabled={isSubmitting}>
						{isSubmitting ? "Submitting..." : "SUBMIT"}
					</button>
				</div>
			</form>

			{responseMessage && (
				<p className="text-center text-green-600 font-semibold">
					{responseMessage}
				</p>
			)}
		</div>
	);
};

export default RegistrationForm;
