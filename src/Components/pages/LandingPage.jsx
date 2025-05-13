import React from "react";
import HeroSection from "../shared/HeroSection";
import FeaturesSection from "../shared/FeaturesSection";
import DevelopersSection from "../shared/DevelopersSection";
import "./LandingPage.css";

export default function LandingPage() {
    return (
        <div className="landing-root">
            <HeroSection />
            <FeaturesSection />
            <DevelopersSection />
        </div>
    );
}
