import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "consolices",
    position: "Associate Software Engineer",
    company: "Consolices",
    location: "Lahore, Pakistan",
    startDate: new Date("2024-12-01"),
    endDate: new Date("2026-02-01"),
    description: [
      "Built MVPs and scalable SaaS applications using React, Next.js, and Supabase.",
      "Delivered high-performance, user-focused features in collaboration with cross-functional teams.",
      "Wrote clean, maintainable code following best practices for scalability.",
      "Leveraged modern developer tools like Claude and Cursor to accelerate development workflows.",
    ],
    achievements: [
      "Delivered an AI-powered review management SaaS (Next.js, Supabase, OpenAI) from zero to MVP in 4 weeks.",
      "Architected a multi-tenant job evaluation SaaS with 4-role RBAC and Row-Level Security for enterprise-grade access control.",
      "Resolved critical firewall token issues, eliminating onboarding failures and cutting support overhead.",
    ],
    skills: ["React", "Next.js", "Typescript", "Supabase", "Full Stack Development"],
    logo: "/experience/consolices_logo.png",
  },
  {
    id: "patronecs",
    position: "Software Engineering Intern",
    company: "Patronecs",
    location: "Sialkot, Pakistan",
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-11-01"),
    description: [
      "Developed responsive web and mobile interfaces across multiple client-facing projects.",
      "Analyzed and replicated a live production app architecture, enabling independent feature contributions within weeks.",
      "Contributed to the development of an internal real-time chat system supporting 20–30 team members.",
    ],
    achievements: [
      "Developed responsive web and mobile interfaces across multiple client-facing projects.",
      "Analyzed and replicated a live production app architecture, enabling independent feature contributions within weeks.",
      "Contributed to the development of an internal real-time chat system supporting 20–30 team members.",
    ],
    skills: ["No-code", "FlutterFlow", "Flutter", "Figma", "Firebase"],
    logo: "/experience/patronecs_logo.png",
  },
];
