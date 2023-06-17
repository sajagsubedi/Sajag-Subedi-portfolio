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
          Hello Everyone!, I,m Sajag Subedi, a passionate web developer based in
          Pokhara. I,ve been honing my skills in full stack web development
          using the MERN stack through YouTube and other free resources. With a
          year of experience under my belt, I stay up-to-date with the latest
          technologies and programming languages. I also offer freelance
          services in the exciting world of web development. Let,s create
          something amazing together!
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
          <h3 className={styles.heroImageText}>Web Developer</h3>
        </div>
      </div>
    </section>
  );
}
