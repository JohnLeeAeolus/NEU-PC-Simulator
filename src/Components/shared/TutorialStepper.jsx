import React from "react";

export default function TutorialStepper({ activeStep, setActiveStep }) {
    return (
        <div className="tutorial-stepper">
            {[1, 2, 3].map((step) => (
                <button
                    key={step}
                    className={"tutorial-step" + (activeStep === step ? " active" : "")}
                    onClick={() => setActiveStep(step)}
                >
                    {`0${step}`}
                </button>
            ))}
        </div>
    );
} 