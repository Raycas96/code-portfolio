import UserInfo from "@/config/user";
import styles from "./experiences.module.css";
export const Experiences = () => {
  return (
    <div className={styles.stack}>
      {UserInfo.experiences.map((experience) => (
        <article key={experience.id}>
          <p className={styles.cardTitle}>
            {experience.role} - {experience.company}
          </p>
          <p className={styles.cardMeta}>
            {experience.period} - {experience.location}
          </p>
          <ul className={styles.bulletList}>
            {experience.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};
