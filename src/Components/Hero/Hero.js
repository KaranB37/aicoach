import React, { useEffect, useRef, useState } from "react";
import styles from "./hm.module.css";
import LottieBackground from "../LottieAnimation/LottieBackground";

export const Hero = () => {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const Content = () => {
    return (
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "20px",
          color: "white",
        }}
      >
        {/* <h1>Your Content Here</h1>
        <p>This content is displayed above the Lottie background.</p> */}
      </div>
    );
  };

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize(); // Initial size update

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);
  return (
    <div className={styles.main} ref={containerRef}>
      <LottieBackground containerRef={containerRef} />
      <Content />
    </div>
  );
};

export default Hero;
