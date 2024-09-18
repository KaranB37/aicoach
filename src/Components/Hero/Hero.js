import React, { useEffect, useState } from "react";
import styles from "./hm.module.css";
import Image from "next/image";
import home from "@/Assets/icons/House.svg";
import overlay from "@/Assets/videos/overlay.mp4";
import TextTransition, { presets } from "react-text-transition";
import { motion } from "framer-motion";

const TEXTS = [
  "Sales Advisor",
  "Negotiation Expert",
  "Marketing Guru",
  "Motivation Guide",
  "General Advisor",
];
export const Hero = ({ video }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  // const Content = () => {
  //   return (

  //   );
  // };

  return (
    <div className={styles.main}>
      {/* <video className={styles.ol2} autoPlay loop muted playsInline>
        <source src={overlay} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className={styles.videoBackground}>
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
      </div>
      <div className={styles.content}>
        <motion.div
          className={styles.img}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <Image src={home} alt="Floating Image" />
        </motion.div>
        <div className={styles.overlay} alt=" " />
        <h1>
          Get Expertise at Real Estate Business with <br />{" "}
          <div className={styles.below}>
            <TextTransition
              springConfig={presets.gentle}
              style={{ margin: "0 0px" }}
              inline
              className={styles.text}
            >
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
            AI Chatbots
          </div>
        </h1>
        <p>
          Streamline Your Real Estate Operations With Tailored Advice From
          Specialized <span className={styles.bold}>AI Chatbots</span> Designed
          For{" "}
          <span className={styles.bold}>
            Sales, Negotiation, Marketing, And More.
          </span>
        </p>
        <button className={styles.gt}>
          <span className={styles.btntext}>GET STARTED</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
