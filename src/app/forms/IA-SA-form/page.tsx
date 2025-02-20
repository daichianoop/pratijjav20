"use client"
import React, { useState } from "react";
import '../form-styles/IA-SA-form.css'
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
        <div className="container">
            <h1>IA/SA APPLICATION</h1>
            <h2 className="subheading">Pratijja V20 IA/SA</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name"
                       required/>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email"
                       required/>
                <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact"
                       required/>
                <input type="text" name="institution" value={formData.institution} onChange={handleChange}
                       placeholder="Institution" required/>

                <h2 className="subheading">Speaking Credentials</h2>
                <textarea name="speakingCredentials" value={formData.speakingCredentials} onChange={handleChange}
                          placeholder="Format: Tournament - Year - Format - No. of Teams - Furthest Outround Reached - Speaker Achievement."/>

                <h2 className="subheading">Judging Credentials</h2>
                <textarea name="judgingCredentials" value={formData.judgingCredentials} onChange={handleChange}
                          placeholder="Format: Tournament - Year - Format - No. of Teams - Furthest Outround Judged - Judge Prize."/>

                <h2 className="subheading">Accommodation</h2>
                <div className="checkbox-container">
                    <input type="checkbox" name="accommodation" checked={formData.accommodation}
                           onChange={handleChange}/>
                    <label>Need Accommodation?</label>
                </div>

                <button type="submit" className="submit-button">SUBMIT</button>
            </form>
        </div>
    );
};

export default IAform;