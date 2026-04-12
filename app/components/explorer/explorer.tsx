import { sections } from "@/app/contants";
import type { CvFileName } from "@/app/contants";
import styles from "./explorer.module.css";

interface ExplorerProps {
  activeFile: CvFileName;
  onFileClick: (file: CvFileName) => void;
}

export const Explorer = ({ activeFile, onFileClick }: ExplorerProps) => {
  return (
    <aside className={styles.explorer} aria-label="Explorer">
      <h2 className={styles.title}>Explorer</h2>
      <ul className={styles.list}>
        {sections.map((file) => (
          <li
            key={file}
            className={`${styles.item} ${file === activeFile ? styles.active : undefined}`.trim()}
            onClick={() => onFileClick(file)}
          >
            {file}
          </li>
        ))}
      </ul>
    </aside>
  );
};
