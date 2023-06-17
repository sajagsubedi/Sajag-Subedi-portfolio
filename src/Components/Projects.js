import styles from "@/styles/Home.module.css";
import { projects } from "../Constants/Projects.js";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <section id="Projects" className={styles.Projects}>
      <div  data-aos="fade-up"
        data-aos-duration="3000"
        className="SectionDivider"></div>
      <h2  data-aos="fade-up"
        data-aos-duration="3000"
       className="SectionTitle">My Projects</h2>
      <h3  data-aos="fade-up"
        data-aos-duration="3000"
        className="SectionSubHeading">What Have I Accomplished?</h3>

      <div className={styles.Projectsgroup}>
        {projects.map((project, i) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              key={i}
              className={styles.ProjectItem}
            >
              <div className={styles.imgBx}>
                <img alt="project" src={project.image} />
              </div>
              <div className={styles.descriptionBx}>
                <h4 className={styles.projectTitle}>{project.title}</h4>
                <span className="decLine"></span>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </div>
              <div className={styles.stackBx}>
                <h5>Technologies Used</h5>
                <ul className={styles.stackGroup}>
                  {project.tags.map((stack, i) => {
                    return (
                      <li key={i} className={styles.stack}>
                        {stack}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className={styles.linkBx}>
                <a
                  className={styles.srcLink}
                  href={project.source}
                  target="_blank"
                >
                  Source
                </a>
                <a
                  className={styles.srcLink}
                  href={project.visit}
                  target="_blank"
                >
                  Visit
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
