"use client";
import React, { useState } from "react";

const InstRegForm: React.FC = () => {
    const [formData, setFormData] = useState({
        email: "",
        institution: "",
        contact1: { name: "", email: "", contact: "", institution: "" },
        contact2: { name: "", email: "", contact: "", institution: "" },
        slots: 1,
        adjudicationSlots: 1,
        accommodation: false,
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const { name, value, type, checked } = e.target;

        setFormData((prevData) => {
            if (name.includes("contact1") || name.includes("contact2")) {
                const [contact, field] = name.split(".");
                return {
                    ...prevData,
                    [contact]: { ...prevData[contact as keyof typeof prevData], [field]: value },
                };
            }
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : type === "radio" ? parseInt(value, 10) : value,
            };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-[#0E131F] text-white p-4">
            <h1 className="text-5xl font-bold text-[#f9e053] text-center mb-8">INSTITUTIONAL TEAM REGISTRATION</h1>
            <form onSubmit={handleSubmit} className="bg-[#1B2029] p-6 rounded-lg shadow-lg w-full max-w-2xl">
                <div className="flex gap-4">
                    <input className="w-1/2 p-2 rounded bg-[#F4D03F] text-black placeholder-black" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                    <input className="w-1/2 p-2 rounded bg-[#F4D03F] text-black placeholder-black" type="text" name="institution" value={formData.institution} onChange={handleChange} placeholder="Institution" />
                </div>

                <div className="flex gap-4 mt-6">
                    {["contact1", "contact2"].map((contact, index) => (
                        <div key={contact} className="w-1/2 bg-[#1B2029] p-4 rounded-lg">
                            <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700 font-semibold mb-2">POINT OF CONTACT - {index + 1}</h2>
                            {Object.keys(formData[contact as keyof typeof formData]).map((field) => (
                                <input
                                    key={field}
                                    className="w-full p-2 rounded bg-[#F4D03F] text-black placeholder-black mb-2"
                                    type={field === "email" ? "email" : "text"}
                                    name={`${contact}.${field}`}
                                    value={formData[contact as keyof typeof formData][field as keyof typeof formData.contact1]}
                                    onChange={handleChange}
                                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {["slots", "adjudicationSlots"].map((slotType) => (
                    <div key={slotType} className="flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-700 text-black p-3 rounded-lg mt-4">
                        <p className="mr-4">Number of {slotType === "slots" ? "Slots" : "Adjudication Slots"}:</p>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <label key={num} className="mr-2 flex items-center">
                                <input className="mr-1" type="radio" name={slotType} value={num} checked={formData[slotType as keyof typeof formData] === num} onChange={handleChange} />
                                {num}
                            </label>
                        ))}
                    </div>
                ))}

                <div className="flex flex-col mt-4">
                    <label className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700 font-semibold">ACCOMMODATION</label>
                    <div className="flex items-center gap-2 text-yellow-400 mt-2">
                        <input className="appearance-none w-5 h-5 border border-yellow-400 checked:bg-yellow-400 cursor-pointer" type="checkbox" name="accommodation" checked={formData.accommodation} onChange={handleChange} />
                        Need Accommodation?
                    </div>
                </div>

                <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700 font-semibold mt-6">MESSAGE</h2>
                <textarea className="w-full p-2 rounded bg-[#F4D03F] text-black placeholder-black mt-2 h-20 resize-none" name="message" value={formData.message} onChange={handleChange} placeholder="Anything else you would like us to know?" />

                <button type="submit" className="block w-36 mx-auto mt-6 bg-gradient-to-r from-yellow-400 to-yellow-700 text-black font-bold py-2 rounded-lg transition hover:from-yellow-300 hover:to-yellow-600">SUBMIT</button>
            </form>
        </div>
    );
};

export default InstRegForm;
