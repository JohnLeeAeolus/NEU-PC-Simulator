import React, { useState } from "react";
import TutorialStepper from "../shared/TutorialStepper";
import FAQSection from "../shared/FAQSection";
import ContactForm from "../shared/ContactForm";
import PCBuildingSimulator from "../shared/PCBuildingSimulator";
import "./HelpPage.css";

export default function HelpPage() {
    const [activeStep, setActiveStep] = useState(1);

    const renderTutorialContent = () => {
        switch (activeStep) {
            case 1:
                return (
                    <div className="help-tutorial-desc">
                        <h2>Welcome to PC Building Tutorial</h2>
                        <p>
                            Learn the basics of PC building through our interactive simulator.
                            This tutorial will guide you through the essential components and
                            assembly process of building a computer.
                        </p>
                    </div>
                );
            case 2:
                return (
                    <div className="help-tutorial-desc">
                        <h2>Interactive PC Building Simulator</h2>
                        <div className="simulator-container">
                            <PCBuildingSimulator />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="help-tutorial-desc">
                        <h2>What's Next?</h2>
                        <p>
                            Now that you've learned the basics of PC building, you can:
                        </p>
                        <ul>
                            <li>Try building different PC configurations</li>
                            <li>Experiment with various components</li>
                            <li>Learn about component compatibility</li>
                            <li>Practice troubleshooting common issues</li>
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="help-root">
            <div className="help-main">
                <div className="help-title-row">
                    <h1 className="help-title">Latest tutorials</h1>
                </div>
                <TutorialStepper activeStep={activeStep} setActiveStep={setActiveStep} />
                {renderTutorialContent()}
                <FAQSection />
                <ContactForm />
            </div>
        </div>
    );
} 