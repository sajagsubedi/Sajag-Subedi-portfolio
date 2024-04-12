import React from "react";
import styles from "@/styles/Home.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="SectionDivider"></div>
      <h2 className="SectionTitle">
        About Me
      </h2>
      <h3 className="SectionSubHeading">Get to know Me!</h3>
      <div className={styles.aboutBody}>
        <p className={styles.aboutText}>
          Hello, I'm Sajag Subedi, a self-taught web developer from Pokhara. My
          coding journey began with an intense four-month dive into HTML, CSS,
          and JavaScript, providing a solid foundation. Over the past two years,
          I've honed my expertise in the MERN stack, seamlessly integrating
          Node.js and React.js into my skill set.
          <br />
          <br /> &nbsp;&nbsp; Driven by the satisfaction of transforming
          concepts into functional websites, I continually refine my skills.
          Recently, I've delved into Typescript, C, and Golang, broadening my
          capabilities. Let's connect and bring your visions to life through
          code, creating remarkable online experiences together.
        </p>
      </div>
    </section>
  );
};

export default About;
