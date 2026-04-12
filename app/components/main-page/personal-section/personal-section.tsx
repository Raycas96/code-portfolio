import UserInfo from "@/config/user";
import styles from "./personal-section.module.css";
export const PersonalSection = () => {
  return (
    <ul className={styles.kvList}>
      <li>
        <span className={styles.kvLabel}>Name</span>
        <span className={styles.kvValue}>{UserInfo.personal.fullName}</span>
      </li>
      <li>
        <span className={styles.kvLabel}>Role</span>
        <span className={styles.kvValue}>{UserInfo.personal.role}</span>
      </li>
      <li>
        <span className={styles.kvLabel}>Location</span>
        <span className={styles.kvValue}>{UserInfo.personal.location}</span>
      </li>
      <li>
        <span className={styles.kvLabel}>Email</span>
        <span className={styles.kvValue}>{UserInfo.personal.email}</span>
      </li>
      <li>
        <span className={styles.kvLabel}>Phone</span>
        <span className={styles.kvValue}>{UserInfo.personal.phone}</span>
      </li>
      <li>
        <span className={styles.kvLabel}>LinkedIn</span>
        <span className={styles.kvValue}>{UserInfo.personal.linkedin}</span>
      </li>
    </ul>
  );
};
