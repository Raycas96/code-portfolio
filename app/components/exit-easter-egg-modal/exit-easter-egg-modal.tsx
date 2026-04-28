import { useEffect } from "react";
import styles from "./exit-easter-egg-modal.module.css";

interface ExitEasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
  durationMs?: number;
}

export const ExitEasterEggModal = ({
  isOpen,
  onClose,
  durationMs = 2500,
}: ExitEasterEggModalProps) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const timer = window.setTimeout(() => {
      onClose();
    }, durationMs);

    return () => {
      window.clearTimeout(timer);
    };
  }, [durationMs, isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles.overlay}
      role="presentation"
      onClick={onClose}
      data-testid="exit-easter-egg-overlay"
    >
      <div
        className={styles.card}
        role="dialog"
        aria-modal="true"
        aria-label="Exit blocked"
        onClick={(event) => event.stopPropagation()}
      >
        <span className={styles.emoji} aria-hidden="true">
          🧙
        </span>
        <div className={styles.content}>
          <p className={styles.text}>You shall not pass!!</p>
          <p className={styles.subtext}>Close the modal by clicking outside, or just wait. 😏</p>
          <div className={styles.progressTrack} aria-hidden="true">
            <div className={styles.progressBar} style={{ animationDuration: `${durationMs}ms` }} />
          </div>
        </div>
      </div>
    </div>
  );
};
