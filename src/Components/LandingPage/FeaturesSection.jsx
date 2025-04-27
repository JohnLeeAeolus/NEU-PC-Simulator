import React from "react";
import styles from "./components.module.css";
import { ControllerIcon, CodeIcon, UserIcon } from "./Icons";

const FeatureCard = ({ icon: Icon, description }) => (
  <article className={styles.featureCard}>
    <Icon className={styles.featureIcon} />
    <p className={styles.featureDescription}>{description}</p>
  </article>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: ControllerIcon,
      description:
        "Assemble your own PC: NEU PC Simulator lets you gather the components and build a stunningly realistic PC. With detailed options for each part, the possible combinations will keep you entertained for hours on end!",
    },
    {
      icon: CodeIcon,
      description:
        "Mod unique: Players can create and implement modifications that enhance gameplay, introduce new components, or even change the entire look of the game. The potential for creativity is endless!",
    },
    {
      icon: UserIcon,
      description:
        "System Builder: NEU PC Simulator provides an intuitive interface for players to navigate and build their dream PC without the need for real-life technical expertise.",
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.sectionTitle}>Game Features</h2>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
