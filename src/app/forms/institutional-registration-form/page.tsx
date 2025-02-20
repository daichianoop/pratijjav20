"use client";
import React, { useState } from "react";
import "../form-styles/institutional-reg.css"
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

                <div className="contact-container">
                    {(["contact1", "contact2"] as const).map((contact, index) => (
                        <div key={contact} className="contact-box">
                            <h2 className="subheading">
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
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {(["slots", "adjudicationSlots"] as const).map((slotType) => (
                    <div key={slotType} className="slots-container">
                        <p className="flex items-center justify-center">Number of {slotType === "slots" ? "Slots" : "Adjudication Slots"}:</p>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <label key={num} className="mr-2 flex items-center">
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

                <div className="checkbox-container">
                    <label className="subheading">
                        ACCOMMODATION
                    </label>
                    <div className={"flex items-center justify-center"}>
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
                <h2 className="subheading">
                    MESSAGE
                </h2>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Anything else you would like us to know?"
                />

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

export default InstRegForm;
