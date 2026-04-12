export interface Language {
  name: string;
  proficiency: string;
}
export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Education {
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
  languages: Language[];
  skills: string[];
}
