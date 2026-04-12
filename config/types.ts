interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

interface Education {
  id: string;
  title: string;
  school: string;
  location: string;
  period: string;
}

export interface Certificate {
  name: string;
  description?: string;
  certificateId?: string;
}

export interface CvProfile {
  personal: {
    fullName: string;
    role: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
  };
  summary: string;
  experiences: Experience[];
  education: Education[];
  certificates: Certificate[];
  languages: string[];
  skills: string[];
}

export const baseCvProfile: CvProfile = {
  personal: {
    fullName: "Your Name",
    role: "Full Stack Developer",
    location: "City, Country",
    email: "name@example.com",
    phone: "+00 0000000000",
    linkedin: "https://www.linkedin.com/in/your-handle/",
  },
  summary:
    "Developer focused on modern web products, maintainable architecture, and continuous learning.",
  experiences: [
    {
      id: "exp-1",
      role: "Intermediate Full Stack Developer",
      company: "Company Name",
      location: "Remote",
      period: "03/2024 - Present",
      highlights: [
        "Built scalable full stack features",
        "Improved observability and incident response",
        "Collaborated with product and design teams",
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      title: "Bachelor in Computer Science",
      school: "University Name",
      location: "City",
      period: "2016 - 2020",
    },
  ],
  certificates: [
    { certificateId: "cert-1", name: "CEH", description: "Certified Ethical Hacker" },
    {
      certificateId: "cert-2",
      name: "CHFI",
      description: "Certified Hackers for Forensics investigation",
    },
  ],
  languages: ["Italian", "English"],
  skills: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js"],
};
