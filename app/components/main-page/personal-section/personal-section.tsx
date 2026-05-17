import UserInfo from "@/config/user";
import { DownloadCvButton } from "@/app/components/download-cv-button/download-cv-button";
import styles from "./personal-section.module.css";
export const PersonalSection = () => {
  return (
    <>
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
          <a className="link-inline" href={`mailto:${UserInfo.personal.email}`}>
            {UserInfo.personal.email}
          </a>
        </li>
        <li>
          <span className={styles.kvLabel}>Phone</span>
          <a className="link-inline" href={`tel:${UserInfo.personal.phone.replace(/\s+/g, "")}`}>
            {UserInfo.personal.phone}
          </a>
        </li>
        <li>
          <span className={styles.kvLabel}>LinkedIn</span>
          <a
            className="link-inline"
            href={UserInfo.personal.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            {UserInfo.personal.linkedin}
          </a>
        </li>
      </ul>

      {UserInfo.cvDownloadUrl ? (
        <div className={styles.mobileCvCta}>
          <DownloadCvButton variant="mobile" />
        </div>
      ) : null}
    </>
  );
};
