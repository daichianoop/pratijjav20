"use client";
import React, { useState } from "react";

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
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-900 text-white p-6">
            <h1 className="text-5xl font-bold text-yellow-400 mb-4">INDEPENDENT ADJUDICATOR APPLICATION</h1>
            <h2 className="text-2xl text-yellow-300 mb-6">Independent Adjudicator</h2>

            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-green-800 p-6 rounded-lg shadow-lg">
                {["name", "email", "contact", "institution"].map((field) => (
                    <input
                        key={field}
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={String(formData[field as keyof FormData])}
                        onChange={handleChange}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        required
                        className="w-full p-3 mb-4 rounded-lg bg-yellow-300 text-black placeholder-black placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                ))}

                <h2 className="text-xl mb-2">Accommodation</h2>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        name="accommodation"
                        checked={formData.accommodation}
                        onChange={handleChange}
                        className="w-5 h-5 text-yellow-400 focus:ring-yellow-500"
                    />
                    <label className="ml-2">Need Accommodation?</label>
                </div>

                <h2 className="text-xl mb-2">Message</h2>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Anything else you would like us to know?"
                    className="w-full p-3 mb-4 rounded-lg bg-yellow-300 text-black placeholder-black placeholder-opacity-50 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <button type="submit" className="w-full p-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all">
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

export default AdjForm;
