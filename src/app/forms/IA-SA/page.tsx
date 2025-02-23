/** @format */

"use client";
import React, { useState } from "react";
import "../form-styles/IA-SA-form.css";

interface FormData {
	name: string;
	email: string;
	contact: string;
	institution: string;
	speakingCredentials: string;
	judgingCredentials: string;
	accommodation: boolean;
}

const IAform: React.FC = () => {
	const initialFormData: FormData = {
		name: "",
		email: "",
		contact: "",
		institution: "",
		speakingCredentials: "",
		judgingCredentials: "",
		accommodation: false,
	};

	const [formData, setFormData] = useState<FormData>(initialFormData);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Map the form data to the API schema.
		// Assuming `contact` maps to `phone` and speaking is determined by speakingCredentials.
		const payload = {
			name: formData.name,
			phone: formData.contact,
			email: formData.email,
			institution: formData.institution,
			speaking: formData.speakingCredentials.trim() !== "",
		};

		try {
			const response = await fetch("/api/form4", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const result = await response.json();
			alert("Form submitted successfully!");
			console.log("Form Submitted:", result);
			// Clear the form fields by resetting the state
			setFormData(initialFormData);
		} catch (error) {
			console.error("Error submitting form:", error);
			alert("There was an error submitting the form. Please try again.");
		}
	};

	return (
		<div className="body-container">
			<div className="container bg-fixed">
				<h1>IA/SA APPLICATION</h1>
				<h2 className="subheading uppercase">Pratijja V20 IA/SA</h2>

				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Name"
						required
					/>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Email"
						required
					/>
					<input
						type="text"
						name="contact"
						value={formData.contact}
						onChange={handleChange}
						placeholder="Contact"
						required
					/>
					<input
						type="text"
						name="institution"
						value={formData.institution}
						onChange={handleChange}
						placeholder="Institution"
						required
					/>

					<h2 className="subheading uppercase">Speaking Credentials</h2>
					<textarea
						name="speakingCredentials"
						value={formData.speakingCredentials}
						onChange={handleChange}
						placeholder="Format: Tournament - Year - Format - No. of Teams - Furthest Outround Reached - Speaker Achievement."
					/>

					<h2 className="subheading uppercase">Judging Credentials</h2>
					<textarea
						name="judgingCredentials"
						value={formData.judgingCredentials}
						onChange={handleChange}
						placeholder="Format: Tournament - Year - Format - No. of Teams - Furthest Outround Judged - Judge Prize."
					/>

					<h2 className="subheading uppercase">Accommodation</h2>
					<div className="checkbox-container">
						<input
							type="checkbox"
							name="accommodation"
							checked={formData.accommodation}
							onChange={handleChange}
						/>
						<label>Need Accommodation?</label>
					</div>

					<button type="submit" className="submit-button">
						SUBMIT
					</button>
				</form>
			</div>
		</div>
	);
};

export default IAform;
