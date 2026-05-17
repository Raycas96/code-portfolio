"use client";
import { ActionBar } from "./components/action-bar/action-bar";
import { ExitEasterEggModal } from "./components/exit-easter-egg-modal";
import { Explorer } from "@/components/explorer";
import { MainPage } from "@/components/main-page";
import { Terminal } from "@/components/terminal";
import "./page.css";
import { useCallback, useEffect, useState } from "react";
import { mediaQueries } from "@/app/styles/breakpoints";
import { sections } from "./contants";

export default function Home() {
  const [activeFile, setActiveFile] = useState(sections[0]);
  const [isCompactView, setIsCompactView] = useState(false);
  const [showExitEasterEgg, setShowExitEasterEgg] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(mediaQueries.compact);
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

  const handleCloseExitEasterEgg = useCallback(() => {
    setShowExitEasterEgg(false);
  }, []);

  return (
    <main className="wrapper">
      <ActionBar
        activeFile={activeFile}
        onFileClick={setActiveFile}
        onExitClick={handleExitClick}
      />
      <ExitEasterEggModal isOpen={showExitEasterEgg} onClose={handleCloseExitEasterEgg} />
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
