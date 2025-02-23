"use client";
import React, { useState } from "react";
import "../form-styles/independent-adjudicator.css"
interface FormData {
    name: string;
    email: string;
    contact: string;
    institution: string;
    accommodation: boolean;
    message: string;
}

const AdjForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        contact: "",
        institution: "",
        accommodation: false,
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, type } = e.target;
        const value = type === "checkbox"
            ? (e.target as HTMLInputElement).checked
            : e.target.value;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <div className={"body-container"}>
        <div className="container">
            <h1>INDEPENDENT ADJUDICATOR APPLICATION</h1>
            <h2 className={"uppercase subheading"}>Independent Adjudicator</h2>

            <form onSubmit={handleSubmit} className="form-container">
                {["name", "email", "contact", "institution"].map((field) => (
                    <input
                        key={field}
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={String(formData[field as keyof FormData])}
                        onChange={handleChange}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        required
                                            />
                ))}

                <h2  className={"uppercase subheading"}>Accommodation</h2>
                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        name="accommodation"
                        checked={formData.accommodation}
                        onChange={handleChange}
                    />
                    <label>Need Accommodation?</label>
                </div>

                <h2 className="subheading uppercase">Message</h2>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Anything else you would like us to know?"
                />

                <button type="submit" className="submit-button">
                    SUBMIT
                </button>
            </form>
        </div>
        </div>
    );
};

export default AdjForm;
