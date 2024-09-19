import React, { useState } from "react";
import styles from "./ss.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import { testimonials } from "@/utils/Constants"; // Import testimonials data

const Swieprsec = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active slide

  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <h1>What Users Say About Agent Coach.ai</h1>
        <p>
          Hear from real estate professionals who have transformed their careers
          with our AI Coach.
        </p>
      </div>
      <div className={styles.swipercon}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{ clickable: false }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Pagination, Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <div
                className={`${styles.singlecard} ${
                  index === activeIndex ? styles.activeSlide : ""
                }`}
              >
                <div className={styles.imgcon}>
                  <Image
                    src={testimonial.image}
                    className={styles.pp}
                    alt="Profile picture"
                  />
                  <Image
                    src={testimonial.icon}
                    className={styles.icon}
                    alt="Icon"
                  />
                </div>
                <span className={styles.pptext}>{testimonial.text}</span>
                <div className={styles.detcon}>
                  <span className={styles.name}>{testimonial.name}</span>
                  <span className={styles.position}>
                    {testimonial.position}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Swieprsec;
