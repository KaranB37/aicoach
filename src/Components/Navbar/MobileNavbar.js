import React, { useEffect, useState } from "react";
import styles from "./mn.module.css";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai";
const Mobilenavbar = (props) => {
  const closefn = () => {
    props.setmobNav(false);
  };

  return (
    <div
      className={styles.mobilenavbar}
      style={props.mobNav ? { left: 0 } : { width: "0%" }}
    >
      <ul className={styles.links}>
        <li>
          <Link href="/">
            <span onClick={closefn}>HOME</span>
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <span onClick={closefn}>ABOUT US</span>
          </Link>
        </li>
        <li>
          <Link href="/#services">
            <span onClick={closefn}>SERVICES</span>
          </Link>
        </li>
        <li>
          <Link href="/#projects">
            <span onClick={closefn}>PROJECTS</span>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <span onClick={closefn}>CONTACT</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Mobilenavbar;
