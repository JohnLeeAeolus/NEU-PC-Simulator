import React from "react";

const faqs = [
    {
        img: "/faq1.png",
        title: "General Info",
        desc: "Learn about account setup, features, and more.",
        btn: "Learn More",
    },
    {
        img: "/faq2.png",
        title: "Technical Help",
        desc: "Get solutions for technical issues and errors.",
        btn: "Explore",
    },
    {
        img: "/faq3.png",
        title: "Contact Us",
        desc: "Reach out to our support team for assistance.",
        btn: "Get Support",
    },
    {
        img: "/faq4.png",
        title: "Tutorials",
        desc: "Step-by-step guides to maximize your experience.",
        btn: "Start Now",
    },
];

export default function FAQSection() {
    return (
        <section className="faq-section">
            <h2>Frequently asked questions</h2>
            <p className="faq-subhead">
                Find answers to common questions or queries regarding our services and operations.
            </p>
            <div className="faq-cards">
                {faqs.map((faq, idx) => (
                    <div className="faq-card" key={idx}>
                        <img src={faq.img} alt={faq.title} className="faq-img" />
                        <div className="faq-card-content">
                            <div className="faq-card-title">{faq.title}</div>
                            <div className="faq-card-desc">{faq.desc}</div>
                            <button className="btn btn-faq">{faq.btn}</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 