import Head from "next/head";
import styles from "@/styles/Home.module.css";
import {
  HeroSection,
  Services,
  Skills,
  Projects,
  Contact,
} from "../Components/index.js";

function Home() {
  return (
    <>
      <Head>
        <title>Sajag Subedi: Innovative Web Developer</title>
        <meta
          name="description"
          content="Sajag,full stack web developer. Discover the realm of cutting-edge tech solutions and explore the services offered by this passionate and skilled professional."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="favicon.ico"
        />
      </Head>
      <main className={styles.main}>
        <HeroSection />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
export default Home;
