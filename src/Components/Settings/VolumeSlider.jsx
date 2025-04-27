"use client";
import React from 'react';
import styles from './GameSettings.module.css';

const VolumeSlider = ({ label, value, width = 150 }) => {
  return (
    <div className={styles.sliderContainer}>
      <label className={styles.sliderLabel}>{label}</label>
      <div className={styles.slider}>
        <div className={styles.frame5}>
          <div
            className={styles.rectangle2}
            style={{ width: `${width}px` }}
          />
        </div>
      </div>
      <span className={styles.sliderValue}>{value}</span>
    </div>
  );
};

export default VolumeSlider;
