import { ReactNode } from "react";
import styles from "./main-page.module.css";
import UserInfo from "@/config/user";
import { Section } from "./section";
import { PersonalSection } from "./personal-section";
import { Experiences } from "./experiences";
import { Education } from "./education";
import { Certificates } from "./certificates";
import { Languages } from "./languages";
import { Skills } from "./skills";
import { CvFileName, FILE_TO_SECTION, SectionKey } from "@/app/contants";

interface MainPageProps {
  selectedFile?: CvFileName;
}

export const MainPage = ({ selectedFile }: MainPageProps) => {
  const visibleSectionKeys =
    selectedFile && selectedFile in FILE_TO_SECTION
      ? FILE_TO_SECTION[selectedFile]
      : FILE_TO_SECTION["FULL_CV.md"];

  const sectionMap: Record<SectionKey, ReactNode> = {
    personal: (
      <Section title="Personal">
        <PersonalSection />
      </Section>
    ),
    experiences: (
      <Section title="Experiences">
        <Experiences />
      </Section>
    ),
    education: (
      <Section title="Education">
        <Education />
      </Section>
    ),
    certificates: (
      <Section title="Certificates">
        <Certificates />
      </Section>
    ),
    languages: (
      <Section title="Languages">
        <Languages />
      </Section>
    ),
    skills: (
      <Section title="Skills">
        <Skills />
      </Section>
    ),
  };

  return (
    <section className={styles.main} aria-label="Main content">
      <div className={styles.titleWrapper}>
        <h1 className={styles.heading}>{UserInfo.cvName}</h1>
        <p className={styles.summary}>{UserInfo.personal.summary}</p>
      </div>
      <div className={styles.sections}>
        {visibleSectionKeys.map((sectionKey) => (
          <div key={sectionKey}>{sectionMap[sectionKey]}</div>
        ))}
      </div>
    </section>
  );
};
