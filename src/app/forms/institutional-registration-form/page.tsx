"use client";
import React, { useState } from "react";

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
    const [formData, setFormData] = useState<FormData>({
        email: "",
        institution: "",
        contact1: { name: "", email: "", contact: "", institution: "" },
        contact2: { name: "", email: "", contact: "", institution: "" },
        slots: 1,
        adjudicationSlots: 1,
        accommodation: false,
        message: "",
    });

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;

        setFormData((prevData) => {
            if (name.includes(".")) {
                const [contact, field] = name.split(".") as [keyof FormData, keyof Contact];
                return {
                    ...prevData,
                    [contact]: {
                        ...prevData[contact as "contact1" | "contact2"],
                        [field]: value,
                    },
                };
            }

            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : type === "radio" ? Number(value) : value,
            };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-[#0E131F] text-white p-4">
            <h1 className="text-5xl font-bold text-[#f9e053] text-center mb-8">INSTITUTIONAL TEAM REGISTRATION</h1>

            <form onSubmit={handleSubmit} className="bg-[#1B2029] p-6 rounded-lg shadow-lg w-full max-w-2xl">
                {/* Email & Institution */}
                <div className="flex gap-4">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="w-1/2 p-2 rounded bg-[#F4D03F] text-black placeholder-black"
                    />
                    <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        placeholder="Institution"
                        required
                        className="w-1/2 p-2 rounded bg-[#F4D03F] text-black placeholder-black"
                    />
                </div>

                <div className="flex gap-4 mt-6">
                    {(["contact1", "contact2"] as const).map((contact, index) => (
                        <div key={contact} className="w-1/2 bg-[#1B2029] p-4 rounded-lg">
                            <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700 font-semibold mb-2">
                                POINT OF CONTACT - {index + 1}
                            </h2>
                            {Object.keys(formData[contact]).map((field) => (
                                <input
                                    key={field}
                                    type={field === "email" ? "email" : "text"}
                                    name={`${contact}.${field}`}
                                    value={formData[contact]?.[field as keyof Contact] || ""}
                                    onChange={handleChange}
                                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                    required
                                    className="w-full p-2 rounded bg-[#F4D03F] text-black placeholder-black mb-2"
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {(["slots", "adjudicationSlots"] as const).map((slotType) => (
                    <div key={slotType} className="flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-700 text-black p-3 rounded-lg mt-4">
                        <p className="mr-4">Number of {slotType === "slots" ? "Slots" : "Adjudication Slots"}:</p>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <label key={num} className="mr-2 flex items-center">
                                <input
                                    className="mr-1"
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

                <div className="flex flex-col mt-4">
                    <label className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700 font-semibold">
                        ACCOMMODATION
                    </label>
                    <div className="flex items-center gap-2 text-yellow-400 mt-2">
                        <input
                            className="appearance-none w-5 h-5 border border-yellow-400 checked:bg-yellow-400 cursor-pointer"
                            type="checkbox"
                            name="accommodation"
                            checked={formData.accommodation}
                            onChange={handleChange}
                        />
                        Need Accommodation?
                    </div>
                </div>

                {/* Message */}
                <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700 font-semibold mt-6">
                    MESSAGE
                </h2>
                <textarea
                    className="w-full p-2 rounded bg-[#F4D03F] text-black placeholder-black mt-2 h-20 resize-none"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Anything else you would like us to know?"
                />

                <button
                    type="submit"
                    className="block w-36 mx-auto mt-6 bg-gradient-to-r from-yellow-400 to-yellow-700 text-black font-bold py-2 rounded-lg transition hover:from-yellow-300 hover:to-yellow-600"
                >
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

export default InstRegForm;
