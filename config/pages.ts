import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Huzaifa Ghumman's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Huzaifa Ghumman's key skills that define my professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Huzaifa Ghumman's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Huzaifa Ghumman.",
    },
  },
  resume: {
    title: "Resume",
    description: "Huzaifa Ghumman's resume.",
    metadata: {
      title: "Resume",
      description: "Huzaifa Ghumman's resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Huzaifa Ghumman's professional journey and experience timeline.",
    },
  },
};
