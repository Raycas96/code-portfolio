export const SECTION_KEYS = [
  "personal",
  "experiences",
  "education",
  "certificates",
  "languages",
  "skills",
] as const;

export type SectionKey = (typeof SECTION_KEYS)[number];

export const CV_FILES = [
  {
    fileName: "FULL_CV.md",
    sections: ["personal", "experiences", "education", "certificates", "languages", "skills"],
  },
  { fileName: "EXPERIENCE.md", sections: ["experiences"] },
  { fileName: "EDUCATION.md", sections: ["education"] },
  { fileName: "CERTIFICATES.md", sections: ["certificates"] },
  { fileName: "SKILLS.md", sections: ["skills", "languages"] },
] as const;

export type CvFileName = (typeof CV_FILES)[number]["fileName"];

export const FILE_TO_SECTION: Record<CvFileName, SectionKey[]> = Object.fromEntries(
  CV_FILES.map((item) => [item.fileName, [...item.sections]]),
) as Record<CvFileName, SectionKey[]>;

export const sections: CvFileName[] = CV_FILES.map((item) => item.fileName);
