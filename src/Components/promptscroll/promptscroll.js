import React from "react";
import styles from "./ps.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { qset1, qset2, qset3 } from "@/utils/Constants";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import arrow from "@/Assets/icons/rightarrow.svg";
const MarqueeSection = ({ questions, direction }) => (
  <Marquee
    direction={direction}
    pauseOnHover={true}
    speed={80}
    // gradient={false} // Add this prop to remove the gradient effect
  >
    <div className={styles.single}>
      {questions.map((item, index) => (
        <div className={styles.marq} key={index}>
          {item.question}
          <div className={styles.arrowcon}>
            <FaArrowRightLong size={20} />
          </div>
        </div>
      ))}
    </div>
  </Marquee>
);
export const Promptscroll = () => {
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <button className={styles.trybtn}>
          <div className={styles.con}>
            <span className={styles.trytext}>TRY IT NOW!</span>
            <Image src={arrow} className={styles.arr} alt=" " />
          </div>
        </button>

        <h1>Explore AgentCoach.ai&apos;s Expertise</h1>
        <p>
          Scroll through example prompts to see how our AI delivers expert
          advice on <br />
          real estate topics.
        </p>
      </div>
      <div className={styles.marqcon}>
        <MarqueeSection questions={qset1} direction="left" />
        <MarqueeSection questions={qset2} direction="right" />
        <MarqueeSection questions={qset3} direction="left" />
      </div>
    </div>
  );
};

export default Promptscroll;
