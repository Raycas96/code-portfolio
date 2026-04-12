import styles from "./terminal.module.css";
import UserInfo from "@/config/user";

export const Terminal = () => {
  return (
    <section className={styles.terminal} aria-label="Terminal">
      <div>
        <span className={styles.prompt}>
          {UserInfo.personal.name}@{UserInfo.personal.surname} cv %
        </span>
        <span className={styles.command}> npm run dev</span>
      </div>
      <div>
        <span className={styles.prompt}>{"> "}status:</span>
        <span className={styles.command}> ready</span>
      </div>
      <div className={styles.cursorLine}>
        <span className={styles.prompt}>{"> "}</span>
        <span className={styles.cursor} aria-hidden="true" />
      </div>
    </section>
  );
};
