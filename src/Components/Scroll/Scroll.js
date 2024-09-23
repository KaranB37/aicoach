import React from "react";
import styles from "./scroll.module.css";
import video from "@/Assets/videos/AIchatbot.mp4";

const Scroll = () => {
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <h1>Start Transforming Your Real Estate Career Today - For Free!</h1>
        <p>
          Unlock expert AI-driven advice for real estate, sales, and
          negotiation. Get started for free and elevate your career today!
        </p>
      </div>
      <div className={styles.container}>
        {/* <div className={styles.left}>
          <div className={styles.scrollingText}>
            <p>Your scrolling text goes here...</p>
          </div>
        </div> */}
        <div className={styles.right}>
          <video
            src={video}
            controls={false}
            autoPlay
            loop
            muted
            className={styles.video}
          />
        </div>
      </div>
    </div>
  );
};

export default Scroll;
