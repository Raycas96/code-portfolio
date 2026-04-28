"use client";
import { ActionBar } from "./components/action-bar/action-bar";
import { Explorer } from "@/components/explorer";
import { MainPage } from "@/components/main-page";
import { Terminal } from "@/components/terminal";
import "./page.css";
import { useCallback, useEffect, useState } from "react";
import { sections } from "./contants";

export default function Home() {
  const [activeFile, setActiveFile] = useState(sections[0]);
  const [isCompactView, setIsCompactView] = useState(false);
  const [showExitEasterEgg, setShowExitEasterEgg] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const updateViewMode = () => setIsCompactView(mediaQuery.matches);

    updateViewMode();
    mediaQuery.addEventListener("change", updateViewMode);

    return () => {
      mediaQuery.removeEventListener("change", updateViewMode);
    };
  }, []);

  const selectedFileForMainPage = isCompactView ? sections[0] : activeFile;

  const handleExitClick = useCallback(() => {
    setShowExitEasterEgg(true);
  }, []);

  useEffect(() => {
    if (!showExitEasterEgg) {
      return;
    }

    const timer = window.setTimeout(() => {
      setShowExitEasterEgg(false);
    }, 2500);

    return () => {
      window.clearTimeout(timer);
    };
  }, [showExitEasterEgg]);

  return (
    <main className="wrapper">
      <ActionBar
        activeFile={activeFile}
        onFileClick={setActiveFile}
        onExitClick={handleExitClick}
      />
      {showExitEasterEgg ? (
        <div className="easter-egg-overlay" role="alert" aria-live="assertive">
          <div className="easter-egg-card">
            <span className="easter-egg-emoji" aria-hidden="true">
              🧙
            </span>
            <p className="easter-egg-text">You shall not pass!!</p>
          </div>
        </div>
      ) : null}
      <div className="editor">
        <Explorer activeFile={activeFile} onFileClick={setActiveFile} />
        <div className="main-column">
          <MainPage selectedFile={selectedFileForMainPage} />
          <Terminal />
        </div>
      </div>
    </main>
  );
}
