import React, { useState } from "react";
import TutorialStepper from "../shared/TutorialStepper";
import FAQSection from "../shared/FAQSection";
import ContactForm from "../shared/ContactForm";
import "./HelpPage.css";

export default function HelpPage() {
    const [activeStep, setActiveStep] = useState(1);

    return (
        <div className="help-root">
            <div className="help-main">
                <div className="help-title-row">
                    <span className="help-back">&#8592;</span>
                    <h1 className="help-title">Latest tutorials</h1>
                </div>
                <TutorialStepper activeStep={activeStep} setActiveStep={setActiveStep} />
                <div className="help-tutorial-desc">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <FAQSection />
                <ContactForm />
            </div>
        </div>
    );
} 