"use client"
import styles from "@/styles/Header.module.css";
import Link from "next/link";
import { useEffect, useState,useRef } from "react";

export default function Header() {
  const [thememode, setThememode] = useState("");
  const themes = ["light", "dark"];
  const Navbar=useRef(null)

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme && themes.includes(storedTheme)) {
      setThememode(storedTheme);
    } else {
      setThememode("light");
    }
  }, []);
  const handleMenuToggle=()=>{
    Navbar.current.classList.toggle(styles.active);

  }
  const offFunc = () => {
    Navbar.current.classList.remove(styles.active);
  };
  useEffect(() => {
    let anchorTags = document.querySelectorAll(".menu li a");
    for (let i = 0; i < anchorTags.length; i++) {
      anchorTags[i].addEventListener("click", offFunc);
    }
  }, []);

  const toggleTheme = () => {
    if (thememode === "dark") {
      setThememode("light");
    } else {
      setThememode("dark");
    }
  };

  useEffect(() => {
    if (thememode) {
      themes.map((theme) => {
        document.body.classList.remove(theme);
      });
      localStorage.setItem("theme", thememode);
      document.body.classList.add(thememode);
    }
  }, [thememode]);
  return (
    <header className={styles.Header} id="header">
      <nav className={styles.Navbar} id="Navbar" ref={Navbar}>
        <div className={styles.navFirsthalf}>
          <div className={styles.logoBx}>
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              width="1.5em"
              className={styles.logo}
            >
              <path d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM37 40H11q-1.25 0-2.125-.875T8 37v-1.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V37q0 1.25-.875 2.125T37 40Zm-26-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z"></path>
            </svg>
            <h3 className={styles.appName}>
              <span className={styles.focusText}>Port</span>folio
            </h3>
          </div>
          <div className={styles.themeToggle} onClick={toggleTheme}>
            {thememode == "light" ? (
              <button className={styles.themeToggleBtn}>
                <svg
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  width="1.5em"
                >
                  <path
                    fill="currentColor"
                    d="M24 42q-7.5 0-12.75-5.25T6 24q0-6.75 3.975-11.45Q13.95 7.85 20.4 6.5q2.05-.4 2.8.7t-.05 3q-.45 1.15-.7 2.35-.25 1.2-.25 2.45 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q1.25 0 2.425-.225 1.175-.225 2.275-.625 2.15-.8 3.2.075 1.05.875.55 2.975-1.35 6.05-6.05 10.025Q30.7 42 24 42Zm0-3q5.45 0 9.5-3.375t5.05-7.925q-1.25.55-2.675.825Q34.45 28.8 33 28.8q-5.75 0-9.775-4.025T19.2 15q0-1.2.25-2.575.25-1.375.9-3.125-4.9 1.35-8.125 5.475Q9 18.9 9 24q0 6.25 4.375 10.625T24 39Zm-.2-14.85Z"
                  />
                </svg>
              </button>
            ) : (
              <button className={styles.themeToggleBtn}>
                <svg
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  width="1.5em"
                >
                  <path
                    fill="currentColor"
                    d="M24 31q2.9 0 4.95-2.05Q31 26.9 31 24q0-2.9-2.05-4.95Q26.9 17 24 17q-2.9 0-4.95 2.05Q17 21.1 17 24q0 2.9 2.05 4.95Q21.1 31 24 31Zm0 3q-4.15 0-7.075-2.925T14 24q0-4.15 2.925-7.075T24 14q4.15 0 7.075 2.925T34 24q0 4.15-2.925 7.075T24 34ZM3.5 25.5q-.65 0-1.075-.425Q2 24.65 2 24q0-.65.425-1.075Q2.85 22.5 3.5 22.5h5q.65 0 1.075.425Q10 23.35 10 24q0 .65-.425 1.075-.425.425-1.075.425Zm36 0q-.65 0-1.075-.425Q38 24.65 38 24q0-.65.425-1.075.425-.425 1.075-.425h5q.65 0 1.075.425Q46 23.35 46 24q0 .65-.425 1.075-.425.425-1.075.425ZM24 10q-.65 0-1.075-.425Q22.5 9.15 22.5 8.5v-5q0-.65.425-1.075Q23.35 2 24 2q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 10 24 10Zm0 36q-.65 0-1.075-.425-.425-.425-.425-1.075v-5q0-.65.425-1.075Q23.35 38 24 38q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 46 24 46ZM12 14.1l-2.85-2.8q-.45-.45-.425-1.075.025-.625.425-1.075.45-.45 1.075-.45t1.075.45L14.1 12q.4.45.4 1.05 0 .6-.4 1-.4.45-1.025.45-.625 0-1.075-.4Zm24.7 24.75L33.9 36q-.4-.45-.4-1.075t.45-1.025q.4-.45 1-.45t1.05.45l2.85 2.8q.45.45.425 1.075-.025.625-.425 1.075-.45.45-1.075.45t-1.075-.45ZM33.9 14.1q-.45-.45-.45-1.05 0-.6.45-1.05l2.8-2.85q.45-.45 1.075-.425.625.025 1.075.425.45.45.45 1.075t-.45 1.075L36 14.1q-.4.4-1.025.4-.625 0-1.075-.4ZM9.15 38.85q-.45-.45-.45-1.075t.45-1.075L12 33.9q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05l-2.8 2.85q-.45.45-1.075.425-.625-.025-1.075-.425ZM24 24Z"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className={styles.menuToggle} id="menuToggle" onClick={handleMenuToggle}></div>
        </div>
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
      </nav>
    </header>
  );
}
