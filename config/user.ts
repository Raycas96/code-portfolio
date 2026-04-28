import type { CvProfile } from "./types";

const baseCvProfile: CvProfile = {
  cvName: "Your Name's CV",
  cvDownloadUrl: "",
  personal: {
    name: "Your Name",
    surname: "Your Surname",
    fullName: "Your Name Your Surname",
    role: "Full Stack Developer",
    location: "City, Country",
    email: "name@example.com",
    phone: "+00 0000000000",
    linkedin: "https://www.linkedin.com/in/your-handle/",
    summary:
      "Developer focused on modern web products, maintainable architecture, and continuous learning.",
  },
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
  languages: [
    { name: "Italian", proficiency: "Native" },
    { name: "English", proficiency: "B2" },
  ],
  skills: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js"],
  projects: [],
};

type ProfileOverride = Partial<CvProfile>;

const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

const mergeProfile = <T>(baseValue: T, overrideValue: unknown): T => {
  if (Array.isArray(baseValue)) {
    return (Array.isArray(overrideValue) ? overrideValue : baseValue) as T;
  }

  if (isPlainObject(baseValue) && isPlainObject(overrideValue)) {
    const mergedObject: Record<string, unknown> = { ...baseValue };

    for (const [key, value] of Object.entries(overrideValue)) {
      mergedObject[key] = key in baseValue ? mergeProfile(baseValue[key as keyof T], value) : value;
    }

    return mergedObject as T;
  }

  return (overrideValue ?? baseValue) as T;
};

const parseProfileOverride = (): ProfileOverride | undefined => {
  const rawOverride = process.env.NEXT_PUBLIC_CV_PROFILE_JSON;

  if (!rawOverride) {
    return undefined;
  }

  try {
    const normalizedOverride = rawOverride
      .trim()
      .replace(/^['"]|['"]$/g, "")
      .replace(/\\'/g, "'");

    return JSON.parse(normalizedOverride) as ProfileOverride;
  } catch {
    return undefined;
  }
};

const resolveCvDownloadUrl = (url: string): string => {
  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  const normalizedUrl = url.startsWith("/") ? url : `/${url}`;
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").trim();

  if (!basePath) {
    return normalizedUrl;
  }

  const normalizedBasePath = basePath.startsWith("/") ? basePath : `/${basePath}`;

  if (normalizedUrl === normalizedBasePath || normalizedUrl.startsWith(`${normalizedBasePath}/`)) {
    return normalizedUrl;
  }

  return `${normalizedBasePath}${normalizedUrl}`;
};

const mergedProfile = mergeProfile(baseCvProfile, parseProfileOverride());
const envCvUrl = process.env.NEXT_PUBLIC_CV_URL?.trim();
const userInfo: CvProfile = {
  ...mergedProfile,
  cvDownloadUrl: envCvUrl ? resolveCvDownloadUrl(envCvUrl) : mergedProfile.cvDownloadUrl.trim(),
};

export default userInfo;
