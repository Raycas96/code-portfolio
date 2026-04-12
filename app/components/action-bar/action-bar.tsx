import type { CvFileName } from "@/app/contants";
import { sections } from "@/app/contants";
import styles from "./action-bar.module.css";
import UserInfo from "@/config/user";

interface ActionBarProps {
  activeFile: CvFileName;
  onFileClick: (file: CvFileName) => void;
}
export const ActionBar = ({ activeFile, onFileClick }: ActionBarProps) => {
  const handleNextFile = () => {
    const currentIndex = Object.values(sections).indexOf(activeFile);
    const nextIndex = (currentIndex + 1) % Object.values(sections).length;
    onFileClick(Object.values(sections)[nextIndex]);
  };

  const handlePrevFile = () => {
    const currentIndex = Object.values(sections).indexOf(activeFile);
    const prevIndex =
      (currentIndex - 1 + Object.values(sections).length) % Object.values(sections).length;
    onFileClick(Object.values(sections)[prevIndex]);
  };

  return (
    <header className={styles.wrapper} aria-label="window controls">
      <div className={styles.controls}>
        <span className={`${styles.dot} ${styles.close}`} />
        <span className={`${styles.dot} ${styles.minimize}`} />
        <span className={`${styles.dot} ${styles.maximize}`} />
      </div>

      <div className={styles.center}>
        <div className={styles.navigation} aria-label="navigation">
          <button
            className={styles.navButton}
            aria-label="Go back"
            type="button"
            onClick={handlePrevFile}
          >
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M9.5 3.5 5 8l4.5 4.5" />
            </svg>
          </button>
          <button
            className={styles.navButton}
            aria-label="Go forward"
            type="button"
            onClick={handleNextFile}
          >
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
