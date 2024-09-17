// components/LottieBackground.js
import React from "react";
import Lottie from "react-lottie";
import animationData from "@/Assets/videos/Flow2.json"; // Replace with your JSON file path

const LottieBackground = ({ containerRef }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true, // Ensure autoplay
    animationData: animationData,
  };

  return (
    <div
      style={{
        position: "absolute", // Ensure it covers the whole container
        top: 68,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none", // Make sure it's non-clickable
      }}
    >
      <Lottie
        options={defaultOptions}
        height="100%" // Ensures it covers the full height
        width="100%" // Ensures it covers the full width
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          objectFit: "cover", // Ensures it covers the container fully
        }}
      />
    </div>
  );
};

export default LottieBackground;
