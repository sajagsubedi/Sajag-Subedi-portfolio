import styles from "@/styles/Home.module.css";
import {
  HeroSection,
  Services,
  Skills,
  Projects,
  Contact,
  About,
} from "@/components";

function Home() {
  return (
    <main id="main" className={styles.main}>
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
export default Home;
