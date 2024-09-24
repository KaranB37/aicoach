import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import styles from "./navbar.module.css";
import newlogo from "@/Assets/icons/logo.svg";
import { navLinks } from "@/utils/Constants";
import { useRouter } from "next/router";

const Navbar = ({ mobNav, setmobNav }) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;
      const navbarHeight = 150;

      sections.forEach((section) => {
        const id = section.id;
        const offset = section.offsetTop - navbarHeight;
        const height = section.offsetHeight;

        if (scrollPosition >= offset && scrollPosition < offset + height) {
          setActiveLink(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveLink(id);
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <Image src={newlogo} className={styles.bottle} alt="" />
        </Link>
        {/* <span className={styles.logo_name}>ONE SQUARE</span> */}
      </div>
      <div>
        <ul className={styles.links}>
          {navLinks.map(({ id, label, href }) => (
            <li
              key={id}
              className={activeLink === id ? styles.active : ""}
              style={{ cursor: "pointer" }}
              onClick={(e) => handleLinkClick(id, e)}
            >
              <span
                className={`${styles.link_a} ${
                  activeLink === id ? styles.active : ""
                }`}
              >
                {label}
              </span>
            </li>
          ))}
          <li>
            <div className={styles.btncon}>
              <button
                className={styles.login}
                onClick={() =>
                  router.push("https://blessed-perch-83.accounts.dev/sign-in")
                }
              >
                Log In
              </button>
              <button
                className={styles.signup}
                onClick={() =>
                  router.push("https://blessed-perch-83.accounts.dev/sign-in")
                }
              >
                Sign Up
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.burg_cont}>
        {mobNav ? (
          <RxCross1
            size={30}
            className={styles.burgerMenu}
            onClick={() => setmobNav(false)}
          />
        ) : (
          <BiMenu
            size={30}
            className={styles.burgerMenu}
            onClick={() => setmobNav(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
