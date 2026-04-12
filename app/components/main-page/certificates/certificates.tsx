import UserInfo from "@/config/user";
import styles from "./certificates.module.css";

export const Certificates = () => {
  return (
    <ul className={styles.simpleList}>
      {UserInfo.certificates.map((certificate) => (
        <li key={certificate.certificateId ?? certificate.name}>
          <span className={styles.name}>{certificate.name}</span>
          {certificate.description ? (
            <span className={styles.description}>{certificate.description}</span>
          ) : null}
        </li>
      ))}
    </ul>
  );
};
