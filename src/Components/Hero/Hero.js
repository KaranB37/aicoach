import React from "react";
import styles from "./hm.module.css";
import Image from "next/image";
import home from "@/Assets/icons/House.svg";
export const Hero = ({ video }) => {
  const Content = () => {
    return (
      <div className={styles.content}>
        <Image src={home} className={styles.img} alt=" " />
        <div className={styles.overlay} alt=" " />
        <h1>
          Get Expertise at Real Estate Business with <br />
        </h1>
        <p>This content is displayed above the background video.</p>
      </div>
    );
  };

  return (
    <div className={styles.main}>
      <video className={styles.videoBackground} autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Content />
    </div>
  );
};

export default Hero;
