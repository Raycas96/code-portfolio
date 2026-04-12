import UserInfo from "@/config/user";
import styles from "./languages.module.css";

export const Languages = () => {
  return (
    <ul className={styles.chipList}>
      {UserInfo.languages?.map((language) => (
        <li key={language.name} className={styles.chip}>
          {language.name} - {language.proficiency}
        </li>
      ))}
    </ul>
  );
};
