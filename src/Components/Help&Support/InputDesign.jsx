"use client";
import React from "react";
import styles from "./components.module.css";
import { Header } from "./Header";
import { TutorialSection } from "./TutorialSection";
import { FAQSection } from "./FAQSection";
import { ContactForm } from "./ContactForm";

const InputDesign = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <main className={styles.mainContainer}>
        <Header />
        <div className={styles.contentContainer}>
          <TutorialSection />
          <FAQSection />
          <ContactForm />
        </div>
      </main>
    </>
  );
};

export default InputDesign;
