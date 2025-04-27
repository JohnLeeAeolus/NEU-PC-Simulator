import React from "react";
import styles from "./GameSettings.module.css";
import ControlRow from "./ControlRow";

const ControlSettings = () => {
  return (
    <section className={styles.container8}>
      <h2 className={styles.controls}>Controls</h2>

      <div className={styles.container9}>
        <h3 className={styles.controlScheme}>Control Scheme</h3>
        <nav className={styles.headerMenu3}>
          <button className={styles.frame9}>
            <span className={styles.keyboard}>Keyboard</span>
            <div className={styles.rectangle} />
          </button>
          <button className={styles.frame10}>Controller</button>
        </nav>
      </div>

      <div className={styles.table} role="table">
        <div className={styles.header} role="rowheader">
          <div className={styles.frame11}>Control</div>
          <div className={styles.frame12}>Action</div>
          <div className={styles.frame13}>Current Key</div>
          <div className={styles.frame14}>Invert</div>
          <div className={styles.frame15}>Sensitivity</div>
          <div className={styles.frame16}>Enabled</div>
          <div className={styles.frame17}>Save Changes</div>
        </div>

        <ControlRow
          control="Sensitivity"
          action="W"
          currentKey="W"
          invert="F"
          sensitivity="0.8"
        />

        <ControlRow
          control="Mouse Cursor"
          action="S"
          currentKey="S"
          invert="F"
          sensitivity="0.8"
        />
      </div>
    </section>
  );
};

export default ControlSettings;
