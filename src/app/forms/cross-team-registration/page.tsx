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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const { name, value, type, checked } = e.target;

        if (index !== undefined) {
            setFormData((prev) => {
                const updatedSpeakers = [...prev.speakers];
                updatedSpeakers[index] = { ...updatedSpeakers[index], [name]: value };
                return { ...prev, speakers: updatedSpeakers };
            });
        } else {
            setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted", formData);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-[#0E131F] text-white p-6">
            <h1 className="text-5xl font-bold text-[#f9e053] text-center mb-6">CROSS TEAM REGISTRATION</h1>

            <form onSubmit={handleSubmit} className="bg-[#1B2029] p-6 rounded-lg shadow-lg w-full max-w-2xl">
                {/* Team Name */}
                <label className="text-2xl font-semibold text-yellow-400">TEAM NAME</label>
                <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    placeholder="Team Name"
                    required
                    className="w-full p-3 rounded-lg bg-yellow-300 text-black placeholder-black mb-4"
                />

                {/* Speakers Section */}
                <div className="mt-4">
                    {formData.speakers.map((speaker, index) => (
                        <div key={index} className="mb-6 p-4 bg-[#1B2029] rounded-lg">
                            <h3 className="text-2xl text-yellow-400 font-semibold mb-2">SPEAKER - {index + 1}</h3>
                            {Object.keys(speaker).map((field) => (
                                <input
                                    key={field}
                                    type="text"
                                    name={field}
                                    value={speaker[field as keyof Speaker]}
                                    onChange={(e) => handleChange(e, index)}
                                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                    required
                                    className="w-full p-3 rounded-lg bg-yellow-300 text-black placeholder-black mb-2"
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {/* Accommodation */}
                <div className="flex items-center gap-2 text-yellow-400 mt-4">
                    <input
                        type="checkbox"
                        name="accommodation"
                        checked={formData.accommodation}
                        onChange={handleChange}
                        className="w-5 h-5 border border-yellow-400 checked:bg-yellow-400 cursor-pointer"
                    />
                    <label className="text-xl">Need Accommodation?</label>
                </div>

                {/* Message */}
                <label className="text-2xl text-yellow-400 font-semibold mt-6 block">MESSAGE</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Anything else you would like us to know?"
                    className="w-full p-3 rounded-lg bg-yellow-300 text-black placeholder-black mt-2 h-20 resize-none"
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    className="block w-40 mx-auto mt-6 bg-yellow-400 text-black font-bold py-3 rounded-lg transition hover:bg-yellow-500"
                >
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;
