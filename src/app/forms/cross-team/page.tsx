/** @format */

"use client";
import React, { useState } from "react";
import "../form-styles/cross-team.css";

interface Speaker {
	name: string;
	email: string;
	contact: string;
	institution: string;
}

interface FormData {
	teamName: string;
	speakers: Speaker[];
	// Note: Even though our interface uses "accommodation", we'll map it to "accomodation" in the payload
	accommodation: boolean;
	message: string;
}

const RegistrationForm: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		teamName: "",
		speakers: [
			{ name: "", email: "", contact: "", institution: "" },
			{ name: "", email: "", contact: "", institution: "" },
			{ name: "", email: "", contact: "", institution: "" },
		],
		accommodation: false,
		message: "",
	});

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
					// Map the client's "accommodation" field to the model's "accomodation"
					accomodation: formData.accommodation,
					message: formData.message,
				}),
			});

			if (res.ok) {
				const data = await res.json();
				setResponseMessage("Form submitted successfully!");
				console.log("Response:", data);
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
		<div className="container">
			<h1>CROSS TEAM REGISTRATION</h1>

			<form onSubmit={handleSubmit} className="form-container">
				{/* Team Name */}
				<label className="subheading">TEAM NAME</label>
				<input
					type="text"
					name="teamName"
					value={formData.teamName}
					onChange={handleChange}
					placeholder="Team Name"
					required
				/>

				{/* Speakers Section */}
				<div className="speakers-container">
					{formData.speakers.map((speaker, index) => (
						<div key={index} className="speaker">
							<h3 className="subheading">SPEAKER - {index + 1}</h3>
							{Object.keys(speaker).map((field) => (
								<input
									key={field}
									type={field === "email" ? "email" : "text"}
									name={field}
									value={String(speaker[field as keyof Speaker])}
									onChange={(e) => handleChange(e, index)}
									placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
									required
								/>
							))}
						</div>
					))}
				</div>

				{/* Accommodation */}
				<div className="checkbox-container">
					<label className="subheading">ACCOMMODATION</label>
					<div>
						<span>Need Accommodation?</span>
						<input
							type="checkbox"
							name="accommodation"
							checked={formData.accommodation}
							onChange={handleChange}
							className={`mt-2 ${formData.accommodation ? "checked" : ""}`}
						/>
					</div>
				</div>

				{/* Message */}
				<label className="subheading">MESSAGE</label>
				<textarea
					name="message"
					value={formData.message}
					onChange={handleChange}
					placeholder="Anything else you would like us to know?"
				/>

				{/* Submit Button */}
				<button type="submit" className="submit-button" disabled={isSubmitting}>
					{isSubmitting ? "Submitting..." : "SUBMIT"}
				</button>
			</form>
			{responseMessage && <p>{responseMessage}</p>}
		</div>
	);
};

export default RegistrationForm;
