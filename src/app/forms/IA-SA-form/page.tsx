"use client"
import React, { useState } from "react";

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
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        contact: "",
        institution: "",
        speakingCredentials: "",
        judgingCredentials: "",
        accommodation: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-900 text-white p-6">
            <h1 className="text-5xl font-bold text-yellow-400 mb-4">IA/SA APPLICATION</h1>
            <h2 className="text-2xl text-yellow-300 mb-6">Pratijja V20 IA/SA</h2>

            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-green-800 p-6 rounded-lg shadow-lg">
                {/* Basic Info Inputs */}
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full p-3 mb-4 rounded-lg bg-yellow-300 text-black placeholder-black placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full p-3 mb-4 rounded-lg bg-yellow-300 text-black placeholder-black placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" required className="w-full p-3 mb-4 rounded-lg bg-yellow-300 text-black placeholder-black placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                <input type="text" name="institution" value={formData.institution} onChange={handleChange} placeholder="Institution" required className="w-full p-3 mb-4 rounded-lg bg-yellow-300 text-black placeholder-black placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-yellow-500" />

                {/* Speaking Credentials */}
                <h2 className="text-xl mb-2">Speaking Credentials</h2>
                <textarea name="speakingCredentials" value={formData.speakingCredentials} onChange={handleChange} placeholder="Format: Tournament - Year - Format - No. of Teams - Furthest Outround Reached - Speaker Achievement." className="w-full p-3 mb-4 rounded-lg bg-yellow-300 text-black placeholder-black placeholder-opacity-50 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500" />

                {/* Judging Credentials */}
                <h2 className="text-xl mb-2">Judging Credentials</h2>
                <textarea name="judgingCredentials" value={formData.judgingCredentials} onChange={handleChange} placeholder="Format: Tournament - Year - Format - No. of Teams - Furthest Outround Judged - Judge Prize." className="w-full p-3 mb-4 rounded-lg bg-yellow-300 text-black placeholder-black placeholder-opacity-50 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500" />

                {/* Accommodation Section */}
                <h2 className="text-xl mb-2">Accommodation</h2>
                <div className="flex items-center mb-4">
                    <input type="checkbox" name="accommodation" checked={formData.accommodation} onChange={handleChange} className="w-5 h-5 text-yellow-400 focus:ring-yellow-500" />
                    <label className="ml-2">Need Accommodation?</label>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full p-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all">
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

export default IAform;