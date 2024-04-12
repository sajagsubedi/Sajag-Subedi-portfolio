import styles from "@/styles/Home.module.css";
import { skills } from "@/constants/Skills.js";

export default function Skills() {
  return (
    <section id="skills" className={styles.Skills}>
      <div className="SectionDivider"></div>
      <h2 className="SectionTitle">My Skills</h2>
      <h3 className="SectionSubHeading">What Can I Do Well?</h3>
      <div className={styles.skillsGroup}>
        {skills.map((skill, i) => {
          return (
            <div
              key={i}
              className={styles.skillbar}
            >
              <div className={styles.progressbar}>
                <span
                  className={styles.progress}
                  style={{ width: skill.percent }}
                >
                  <span>{skill.title}</span>
                </span>
              </div>
              <span className={styles.progresspercent}>{skill.percent}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
