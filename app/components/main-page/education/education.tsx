import UserInfo from "@/config/user";
import styles from "./education.module.css";

export const Education = () => {
  return (
    <div className={styles.stack}>
      {UserInfo.education?.map((education) => (
        <article key={education.id}>
          <p className={styles.cardTitle}>{education.title}</p>
          <p className={styles.cardMeta}>
            {education.school} - {education.location}
          </p>
          <p className={styles.cardMeta}>{education.period}</p>
        </article>
      ))}
    </div>
  );
};
