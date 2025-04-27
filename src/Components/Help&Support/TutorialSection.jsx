import React from "react";
import styles from "./Design.css";

export const TutorialSection = () => {
  return (
    <section className={styles.tutorialSection}>
      <h2 className={styles.sectionTitle}>Latest tutorials</h2>
      <div className={styles.tutorialPagination}>
        <button className={styles.paginationButton}>01</button>
        <button className={styles.paginationButton}>02</button>
        <button className={styles.paginationButton}>03</button>
      </div>
      <p className={styles.tutorialContent}>
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
  );
};
