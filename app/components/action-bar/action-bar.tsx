import styles from "./action-bar.module.css";
import UserInfo from "@/config/user";
export const ActionBar = () => {
  return (
    <header className={styles.wrapper} aria-label="window controls">
      <div className={styles.controls}>
        <span className={`${styles.dot} ${styles.close}`} />
        <span className={`${styles.dot} ${styles.minimize}`} />
        <span className={`${styles.dot} ${styles.maximize}`} />
      </div>

      <div className={styles.center}>
        <div className={styles.navigation} aria-label="navigation">
          <button className={styles.navButton} aria-label="Go back" type="button">
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M9.5 3.5 5 8l4.5 4.5" />
            </svg>
          </button>
          <button className={styles.navButton} aria-label="Go forward" type="button">
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M6.5 3.5 11 8l-4.5 4.5" />
            </svg>
          </button>
        </div>

        <div className={styles.repoName} aria-label="repository name">
          {UserInfo.cvName}
        </div>
      </div>
    </header>
  );
};
