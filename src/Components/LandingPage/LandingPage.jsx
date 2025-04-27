"use client";
import React from "react";
import NavigationHeader from "./NavigationHeader";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import DeveloperQuotes from "./DeveloperQuotes";

const LandingPage = ({ darkMode }) => {
  return (
    <div className={`landing-page ${darkMode ? "dark-mode" : ""}`}>
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <NavigationHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DeveloperQuotes />
      </main>
    </div>
  );
};

export default LandingPage;
