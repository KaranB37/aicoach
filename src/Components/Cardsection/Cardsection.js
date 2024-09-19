import React from "react";
import styles from "./cards.module.css";
import Image from "next/image";
import { cardinfo } from "@/utils/Constants";
import arrow from "@/Assets/icons/glowarrow.svg";
const Cardsection = () => {
  const splitIndex = 3; // Number of items to display in the first section

  const firstPart = cardinfo.slice(0, splitIndex);
  const secondPart = cardinfo.slice(splitIndex);

  return (
    <div className={styles.maincon}>
      <div className={styles.box}>
        <h1>Explore AI Chatbots</h1>
        <p>
          Engage with our AI chatbots to receive expert guidance tailored to
          your needs in Sales, Negotiation, Marketing, and more.
        </p>
      </div>
      <div className={styles.cardcon}>
        <div className={styles.up}>
          {firstPart.map((e, index) => (
            <div className={styles.card} key={index}>
              <Image src={e.img} className={styles.cardimg} alt=" " />
              <span className={styles.cardh1}>{e.title}</span>
              <span className={styles.cardp}>{e.description}</span>
              <div className={styles.glow}>
                <Image src={arrow} className={styles.arrow} alt=" " />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.below}>
          {secondPart.map((e, index) => (
            <div className={styles.card} key={index}>
              <Image src={e.img} className={styles.cardimg} alt=" " />
              <span className={styles.cardh1}>{e.title}</span>
              <span className={styles.cardp}>{e.description}</span>
              <div className={styles.glow}>
                <Image src={arrow} className={styles.arrow} alt=" " />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardsection;
