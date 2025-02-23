/** @format */

"use client";
import React, { useState } from "react";
import "../form-styles/institutional-reg.css";

interface Contact {
	name: string;
	email: string;
	contact: string;
	institution: string;
}

interface FormData {
	email: string;
	institution: string;
	contact1: Contact;
	contact2: Contact;
	slots: number;
	adjudicationSlots: number;
	accommodation: boolean;
	message: string;
}

const InstRegForm: React.FC = () => {
	const initialFormData: FormData = {
		email: "",
		institution: "",
		contact1: { name: "", email: "", contact: "", institution: "" },
		contact2: { name: "", email: "", contact: "", institution: "" },
		slots: 1,
		adjudicationSlots: 1,
		accommodation: false,
		message: "",
	};

	const [formData, setFormData] = useState<FormData>(initialFormData);

	// Handle input changes
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value, type, checked } = e.target as HTMLInputElement;

		setFormData((prevData) => {
			// Handle nested fields for contact1 and contact2
			if (name.includes(".")) {
				const [contactKey, field] = name.split(".") as [
					"contact1" | "contact2",
					keyof Contact
				];
				return {
					...prevData,
					[contactKey]: {
						...prevData[contactKey],
						[field]: value,
					},
				};
			}
			// Handle checkboxes and radio inputs
			return {
				...prevData,
				[name]:
					type === "checkbox"
						? checked
						: type === "radio"
						? Number(value)
						: value,
			};
		});
	};

	// Handle form submission and send data to API route
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Prepare payload according to the API schema
		const payload = {
			email: formData.email,
			institution: formData.institution,
			name_poc1: formData.contact1.name,
			contact_poc1: formData.contact1.contact,
			email_poc1: formData.contact1.email,
			name_poc2: formData.contact2.name,
			contact_poc2: formData.contact2.contact,
			email_poc2: formData.contact2.email,
			slots: formData.slots,
			ajudicator_slots: formData.adjudicationSlots,
			accomodation: formData.accommodation,
			message: formData.message,
		};

		try {
			const response = await fetch("/api/form2", {
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
			console.log("Form Submitted Successfully:", result);
			// Clear the form fields
			setFormData(initialFormData);
		} catch (error) {
			console.error("Error submitting form:", error);
			alert("There was an error submitting the form. Please try again.");
		}
	};

	return (
		<div className="container">
			<h1>INSTITUTIONAL TEAM REGISTRATION</h1>

			<form onSubmit={handleSubmit} className="form-container">
				{/* Email & Institution */}
				<div className="flex-container">
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
						name="institution"
						value={formData.institution}
						onChange={handleChange}
						placeholder="Institution"
						required
					/>
				</div>

				{/* Contacts */}
				<div className="contact-container">
					{(["contact1", "contact2"] as const).map((contactKey, index) => (
						<div key={contactKey} className="contact-box">
							<h2 className="subheading">POINT OF CONTACT - {index + 1}</h2>
							{Object.keys(formData[contactKey]).map((field) => (
								<input
									key={field}
									type={field === "email" ? "email" : "text"}
									name={`${contactKey}.${field}`}
									value={formData[contactKey][field as keyof Contact] || ""}
									onChange={handleChange}
									placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
									required
								/>
							))}
						</div>
					))}
				</div>

				{/* Slot Selection */}
				{(["slots", "adjudicationSlots"] as const).map((slotType) => (
					<div key={slotType} className="slots-container">
						<p>
							Number of {slotType === "slots" ? "Slots" : "Adjudication Slots"}:
						</p>
						{[1, 2, 3, 4, 5].map((num) => (
							<label key={num} className="mr-2">
								<input
									type="radio"
									name={slotType}
									value={num}
									checked={formData[slotType] === num}
									onChange={handleChange}
								/>
								{num}
							</label>
						))}
					</div>
				))}

				{/* Accommodation Checkbox */}
				<div className="checkbox-container">
					<label className="subheading">ACCOMMODATION</label>
					<div className="flex items-center justify-center">
						<input
							type="checkbox"
							name="accommodation"
							checked={formData.accommodation}
							onChange={handleChange}
						/>
						Need Accommodation?
					</div>
				</div>

				{/* Message */}
				<h2 className="subheading">MESSAGE</h2>
				<textarea
					name="message"
					value={formData.message}
					onChange={handleChange}
					placeholder="Anything else you would like us to know?"
				/>

				{/* Submit Button */}
				<button type="submit" className="submit-button">
					SUBMIT
				</button>
			</form>
		</div>
	);
};

export default InstRegForm;
