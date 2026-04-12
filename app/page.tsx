"use client";
import { ActionBar } from "./components/action-bar/action-bar";
import { Explorer } from "@/components/explorer";
import { MainPage } from "@/components/main-page";
import { Terminal } from "@/components/terminal";
import "./page.css";
import { useEffect, useState } from "react";
import { sections } from "./contants";

export default function Home() {
  const [activeFile, setActiveFile] = useState(sections[0]);
  const [isCompactView, setIsCompactView] = useState(false);

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

  return (
    <main className="wrapper">
      <ActionBar />
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
