import UserInfo from "@/config/user";
import styles from "./projects.module.css";

export const Projects = () => {
  if (!UserInfo.projects || UserInfo.projects.length === 0) {
    return null;
  }

  return (
    <div className={styles.stack}>
      {UserInfo.projects.map((project) => (
        <article key={project.name} className={styles.card}>
          <p className={styles.cardTitle}>{project.name}</p>
          <ul className={styles.bulletList}>
            <p className={styles.cardMeta}>{project.description}</p>
            {project.link ? (
              <a
                className="link-inline link-inline-small"
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                {project.link}
              </a>
            ) : null}
          </ul>
        </article>
      ))}
    </div>
  );
};
