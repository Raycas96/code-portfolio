import { Languages } from "./../app/components/main-page/languages/languages";
interface Languages {
  name: string;
  proficiency: string;
}
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
  cvName: string;
  personal: {
    name: string;
    surname: string;
    fullName: string;
    role: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    summary: string;
  };
  experiences: Experience[];
  education: Education[];
  certificates: Certificate[];
  languages: Languages[];
  skills: string[];
}
