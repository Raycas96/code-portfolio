"use client";
import { ActionBar } from "./components/action-bar/action-bar";
import { Explorer } from "@/components/explorer";
import { MainPage } from "@/components/main-page";
import { Terminal } from "@/components/terminal";
import "./page.css";
import { useState } from "react";
import { sections } from "./contants";

export default function Home() {
  const [activeFile, setActiveFile] = useState(sections[0]);

  return (
    <main className="wrapper">
      <ActionBar />
      <div className="editor">
        <Explorer activeFile={activeFile} onFileClick={setActiveFile} />
        <div className="main-column">
          <MainPage selectedFile={activeFile} />
          <Terminal />
        </div>
      </div>
    </main>
  );
}
