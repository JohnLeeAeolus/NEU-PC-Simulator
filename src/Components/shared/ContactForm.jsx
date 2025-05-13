import React, { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message submitted! (Demo only)");
        setForm({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <section className="contact-section">
            <h2>Contact us</h2>
            <p className="contact-subhead">
                We're here to help! Get in touch with us for any queries or questions you may have.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                />
                <button className="btn btn-primary contact-submit" type="submit">
                    Submit
                </button>
            </form>
        </section>
    );
} 