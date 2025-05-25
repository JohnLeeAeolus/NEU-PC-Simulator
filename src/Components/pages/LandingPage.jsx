import React, { useEffect } from "react";
import HeroSection from "../shared/HeroSection";
import FeaturesSection from "../shared/FeaturesSection";
import DevelopersSection from "../shared/DevelopersSection";
import "./LandingPage.css";

function useFadeInOnScroll() {
    useEffect(() => {
        const onScroll = () => {
            document.querySelectorAll('.fade-in-section').forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 60) {
                    el.classList.add('visible');
                }
            });
        };
        window.addEventListener('scroll', onScroll);
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
}

export default function LandingPage() {
    useFadeInOnScroll();
    return (
        <div className="landing-root">
            <HeroSection />
            <FeaturesSection />
            <DevelopersSection />
        </div>
    );
}
