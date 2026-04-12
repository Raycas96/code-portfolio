import UserInfo from "@/config/user";
import styles from "./skills.module.css";

export const Skills = () => {
  return (
    <ul className={styles.chipList}>
      {UserInfo.skills.map((skill) => (
        <li key={skill} className={styles.chip}>
          {skill}
        </li>
      ))}
    </ul>
  );
};
