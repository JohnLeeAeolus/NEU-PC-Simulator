"use client";
import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import styles from "./components.module.css";
import { LogoIcon, PlayIcon, HelpIcon } from "./Icons";

const NavigationHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <LogoIcon className={styles.logo} />
        <h1 className={styles.brandName}>NEU PC Simulator</h1>
      </div>

      <nav className={styles.mainNav}>
        <a href="#" className={styles.navLink}>
          Home
        </a>
        {/* Correctly set up the Link component for Settings */}
        <Link to="/Settings" className={styles.navLink}>
          Settings
        </Link>
      </nav>

      <div className={styles.actionButtons}>
        <button className={styles.playButton}>
          <PlayIcon />
          <span>Play Now</span>
        </button>
        <button className={styles.helpButton}>
          <HelpIcon />
          <span>Help</span>
        </button>
      </div>
    </header>
  );
};

export default NavigationHeader;
