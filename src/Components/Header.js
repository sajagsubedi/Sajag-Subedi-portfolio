import styles from "@/styles/Header.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  useEffect(() => {
    let anchorTags = document.querySelectorAll(".menu li a");
    const navigation = document.getElementById("navigation");
    const menuToggle = document.getElementById("menuToggle");
    const offFunc = () => {
      navigation.classList.remove(styles.active);
    };
    for (let i = 0; i < anchorTags.length; i++) {
      anchorTags[i].addEventListener("click", offFunc);
    }
    menuToggle.addEventListener("click", () => {
      console.log("clicked");
      navigation.classList.toggle(styles.active);
    });
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div id="navigation" className={styles.navigation}>
          <div className={styles.phoneVisible}>
            <div className={styles.appnameBx}>
              <h3 className={styles.appname}>Sajag Subedi</h3>
            </div>
            <div id="menuToggle" className={styles.menuToggle}>
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                width="1.5em"
              >
                <path
                  fill="currentColor"
                  d="M24 40q-1 0-1.7-.7t-.7-1.7q0-1 .7-1.7t1.7-.7q1 0 1.7.7t.7 1.7q0 1-.7 1.7T24 40Zm0-13.6q-1 0-1.7-.7t-.7-1.7q0-1 .7-1.7t1.7-.7q1 0 1.7.7t.7 1.7q0 1-.7 1.7t-1.7.7Zm0-13.6q-1 0-1.7-.7t-.7-1.7q0-1 .7-1.7T24 8q1 0 1.7.7t.7 1.7q0 1-.7 1.7t-1.7.7Z"
                />
              </svg>
            </div>
          </div>
          <div className={styles.navlinks}>
            <ul className={styles.menu}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#about">About Me</Link>
              </li>
              <li>
                <Link href="/#services">My Services</Link>
              </li>
              <li>
                <Link href="/#Projects">My Projects</Link>
              </li>
              <li>
                <Link href="#skills">My Skills</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
