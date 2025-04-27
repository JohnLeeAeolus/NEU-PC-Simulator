import React from "react";
import styles from "./GameSettings.module.css";

const ControlRow = ({ control, action, currentKey, invert, sensitivity }) => {
  return (
    <div className={styles.row}>
      <div className={styles.frame18}>{control}</div>
      <div className={styles.frame19}>{action}</div>
      <div className={styles.frame20}>{currentKey}</div>
      <div className={styles.frame21}>{invert}</div>
      <div className={styles.frame22}>{sensitivity}</div>
      <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/dc1ecafc42cf05267e8aec376274b9fe837e44b0?placeholderIfAbsent=true" alt="Status" className={styles.img5} />
      <div className={styles.frame23}>
        <button className={styles.button2}>Save</button>
      </div>
    </div>
  );
};

export default ControlRow;
