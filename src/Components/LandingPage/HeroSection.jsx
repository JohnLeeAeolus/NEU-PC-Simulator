import React from "react";
import styles from "./components.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bbb855ac94dc5d79630a23b8b34cee1b66c77af?placeholderIfAbsent=true"
        alt="Hero background"
        className={styles.heroBackground}
      />
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <h2 className={styles.heroTitle}>Dive into 2D Gaming!</h2>
        <p className={styles.heroDescription}>
          Dive into the Exciting World of Offline 2D Gaming!
        </p>
        <button className={styles.exploreButton}>Explore Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
