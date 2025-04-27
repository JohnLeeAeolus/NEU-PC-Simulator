import React from "react";
import styles from "./Design.css";

const FAQCard = ({ image, title, description, buttonText }) => {
  return (
    <article className={styles.faqCard}>
      <img src={image} alt="" className={styles.faqImage} />
      <h3 className={styles.faqCardTitle}>{title}</h3>
      <p className={styles.faqCardDescription}>{description}</p>
      <button className={styles.faqCardButton}>{buttonText}</button>
    </article>
  );
};

export const FAQSection = () => {
  const faqCards = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ffc6b9f7c915880a3351a5eceb32bc964a3c8616?placeholderIfAbsent=true",
      title: "General Info",
      description: "Learn about account setup, features, and more.",
      buttonText: "Learn More",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7ed64bbbc38cb16bda27ff2f3a2b08f80f02028?placeholderIfAbsent=true",
      title: "Technical Help",
      description: "Get solutions for technical issues and errors.",
      buttonText: "Explore",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b2b508f6d1411400c91cf0590bc285895ed95d33?placeholderIfAbsent=true",
      title: "Contact Us",
      description: "Reach out to our support team for assistance.",
      buttonText: "Get Support",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ace95333fdcb1af2fdb68ef97b9d844299354c4?placeholderIfAbsent=true",
      title: "Tutorials",
      description: "Step-by-step guides to maximize your experience.",
      buttonText: "Start Now",
    },
  ];

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.sectionTitle}>Frequently asked questions</h2>
      <p className={styles.sectionDescription}>
        Find answers to common questions or queries regarding our services and
        operations.
      </p>
      <div className={styles.faqGrid}>
        {faqCards.map((card, index) => (
          <FAQCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};
