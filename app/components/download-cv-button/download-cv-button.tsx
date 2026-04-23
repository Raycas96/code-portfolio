import UserInfo from "@/config/user";
import styles from "./download-cv-button.module.css";

type DownloadCvButtonVariant = "inline" | "toolbar" | "mobile";

interface DownloadCvButtonProps {
  variant?: DownloadCvButtonVariant;
  className?: string;
  label?: string;
}

const variantClassMap: Record<DownloadCvButtonVariant, string> = {
  inline: styles.inline,
  toolbar: styles.toolbar,
  mobile: styles.mobile,
};

export const DownloadCvButton = ({
  variant = "inline",
  className,
  label = "Download CV PDF",
}: DownloadCvButtonProps) => {
  const isExternalCvLink = /^https?:\/\//i.test(UserInfo.cvDownloadUrl);
  const composedClassName = [styles.button, variantClassMap[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={composedClassName}
      href={UserInfo.cvDownloadUrl}
      target={isExternalCvLink ? "_blank" : undefined}
      rel={isExternalCvLink ? "noreferrer noopener" : undefined}
      download={isExternalCvLink ? undefined : ""}
    >
      {label}
    </a>
  );
};
