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
    accommodation: boolean;
    message: string;
}

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        teamName: "",
        speakers: [
            { name: "", email: "", contact: "", institution: "" },
            { name: "", email: "", contact: "", institution: "" },
            { name: "", email: "", contact: "", institution: "" }
        ],
        accommodation: false,
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index?: number) => {
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted", formData);
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
                                    value={String(speaker[field as keyof Speaker])} // ✅ Ensures correct type
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
                <button
                    type="submit"
                    className="submit-button"
                >
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;
