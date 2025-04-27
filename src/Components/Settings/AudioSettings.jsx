import React from "react";
import styles from "./GameSettings.module.css";
import VolumeSlider from "./VolumeSlider";

const AudioSettings = () => {
  return (
    <section className={styles.container3}>
      <h2 className={styles.audio2}>Audio</h2>

      <div className={styles.container4}>
        <VolumeSlider label="Master Volume" value="50" width={150} />
      </div>

      <div className={styles.container5}>
        <VolumeSlider label="Background Music" value="30" width={90} />
      </div>

      <div className={styles.container6}>
        <VolumeSlider label="Sound Effects" value="70" width={210} />
      </div>

      <div className={styles.container7}>
        <VolumeSlider label="Voice Volume" value="50" width={150} />
      </div>
    </section>
  );
};

export default AudioSettings;
