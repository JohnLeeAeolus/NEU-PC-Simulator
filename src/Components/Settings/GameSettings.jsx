"use client";
import React from 'react';
import styles from './GameSettings.module.css';
import GameHeader from './GameHeader';
import AudioSettings from './AudioSettings';
import ControlSettings from './ControlSettings';

const GameSettings = () => {
  return (
    <main className={styles.gameSettings}>
      <GameHeader />
      <section className={styles.container2}>
        <header className={styles.settingsHeader}>
          <h1 className={styles.settings2}>Settings</h1>
          <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/67673f312c130e581752d6375512fc750a921270?placeholderIfAbsent=true" alt="Settings icon" className={styles.settingsIcon} />
        </header>

        <nav className={styles.headerMenu2}>
          <button className={styles.frame3}>
            <span className={styles.audio}>Audio</span>
            <div className={styles.rectangle} />
          </button>
          <button className={styles.frame4}>Controls</button>
        </nav>

        <AudioSettings />
        <ControlSettings />
      </section>
    </main>
  );
};

export default GameSettings;
