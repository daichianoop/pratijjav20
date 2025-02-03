import { NextResponse } from 'next/server';
import Contact from '@/models/contact'; // Adjust the path as necessary

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }

        // Create a new contact document
        const newContact = new Contact({
            name,
            email,
            message,
        });

        // Save the contact
        await newContact.save();

        return NextResponse.json({ message: 'Contact saved successfully' }, { status: 201 });
    } catch (error) {
        console.error('Error saving contact:', error);
        return NextResponse.json({ message: 'Error saving contact', error }, { status: 500 });
    }
}
