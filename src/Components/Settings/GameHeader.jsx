import React from 'react';
import styles from './GameSettings.module.css';

const GameHeader = () => {
  return (
    <header className={styles.container}>
      <div className={styles.headerContent}>
        <div className={styles.logoSection}>
          <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/bee5308a18bc1f075a20ffcf52725ffe884cabe0?placeholderIfAbsent=true" alt="Logo" className={styles.img} />
          <h2 className={styles.neupcSimulator}>NEU PC Simulator</h2>
        </div>

        <nav className={styles.headerMenu}>
          <button className={styles.frame}>Home</button>
          <button className={styles.frame2}>
            <span className={styles.settings}>Settings</span>
            <div className={styles.rectangle} />
          </button>
        </nav>
      </div>

      <div className={styles.headerActions}>
        <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/616e64ccee88abf88783a7f353c4e4ac81244116?placeholderIfAbsent=true" alt="Profile" className={styles.img2} />
        <button className={styles.button}>
          <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/aa3e1a0e357df23ff085be83ef2cc61b7b467244?placeholderIfAbsent=true" alt="Help icon" className={styles.img3} />
          <span>Help</span>
        </button>
      </div>
    </header>
  );
};

export default GameHeader;
