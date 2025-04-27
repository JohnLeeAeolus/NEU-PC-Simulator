"use client";
import React from "react";
import styles from "./Design.css";

export const ContactForm = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.sectionTitle}>Contact us</h2>
      <p className={styles.sectionDescription}>
        We're here to help! Get in touch with us for any queries or questions
        you may have.
      </p>
      <form className={styles.contactForm}>
        <div className={styles.formField}>
          <input type="text" placeholder="Name" className={styles.formInput} />
        </div>
        <div className={styles.formField}>
          <input
            type="email"
            placeholder="Email"
            className={styles.formInput}
          />
        </div>
        <div className={styles.formField}>
          <input
            type="text"
            placeholder="Subject"
            className={styles.formInput}
          />
        </div>
        <div className={styles.formField}>
          <textarea placeholder="Message" className={styles.formTextarea} />
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </section>
  );
};
