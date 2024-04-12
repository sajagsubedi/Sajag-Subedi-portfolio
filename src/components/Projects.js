import styles from "@/styles/Home.module.css";
import { projects } from "@/constants/Projects.js";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="Projects" className={styles.Projects}>
      <div className="SectionDivider"></div>
      <h2 className="SectionTitle">My Projects</h2>
      <h3 className="SectionSubHeading">What Have I Accomplished?</h3>

      <div className={styles.Projectsgroup}>
        {projects.map((project, i) => {
          return (
            <div key={i} className={styles.ProjectItem}>
              <div className={styles.imgBx}>
               <Image
                  alt="project"
                  src={project.image}
                  width={2000}
                  height={2000}
                  loading="lazy"
               />
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
