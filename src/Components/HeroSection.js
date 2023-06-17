import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="about" className={styles.HeroSection}>
      <div className={styles.heroDescriptionHalf}>
        <h1 className={styles.HeroMainText}>
          <span className={styles.focusText}>Sajag</span> Subedi
        </h1>
        <p className={styles.HeroDescription}>
          Welcome to my portfolio! I&rsquo;m Sajag Subedi, a passionate web
          developer based in Pokhara. With a year of experience under my belt, I
          specialize in full stack web development using the MERN stack. I
          continuously refine my skills through YouTube and other free resources
          to stay up-to-date with the latest technologies and programming
          languages.
          <br />
          <br />
          &nbsp;I love building innovative web experiences and thrive on the
          challenge of turning ideas into reality. Whether you&rsquo;re an
          individual or a business seeking to bring your visions to life,
          let&rsqo;s create something amazing together!
        </p>
        <div className="btn-container">
          <button className="PrimaryButton btn">Hire Me</button>
          <button className="SecondaryButton btn"> Explore More</button>
        </div>
      </div>
      <div className={styles.heroImageHalf}>
        <img className={styles.heroImg} src="/home.png" alt="Sajag" />
        <div className={styles.heroImageTextBx}>
          <div className={styles.hrLine}></div>
          <div className={styles.hrLine}></div>
          <h3 className={styles.heroImageText}>A Innovative Web Developer</h3>
        </div>
      </div>
    </section>
  );
}
