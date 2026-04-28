interface Language {
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

interface Certificate {
  name: string;
  description?: string;
  certificateId?: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  link?: string;
}

export interface CvProfile {
  cvName: string;
  cvDownloadUrl: string;
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
  education?: Education[];
  certificates?: Certificate[];
  languages?: Language[];
  skills?: string[];
  projects?: Project[];
}
