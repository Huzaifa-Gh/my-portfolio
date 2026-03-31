import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "five-star-ai",
    companyName: "Five Star AI - Google Review Management",
    type: "Professional",
    category: ["Full Stack", "Web Dev", "OpenAI"],
    shortDescription:
      "AI-powered Google review management platform with automated responses, review requests, and multi-client handling to help businesses scale their review operations.",
    websiteLink: "https://five-star-ai.vercel.app",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
      "OpenAI API",
      "Vercel",
    ],
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-02-01"),
    companyLogoImg: "/projects/five-star-ai/logo.png",
    pagesInfoArr: [
      {
        title: "Dashboard",
        description:
          "Centralized platform for managing Google reviews across multiple clients.",
        imgArr: ["/projects/five-star-ai/dashboard.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Five Star AI simplifies Google review management with AI-generated responses, automated review requests, and a centralized platform for multi-client handling.",
        "It reduces manual effort, speeds up responses, and helps businesses scale their review operations efficiently.",
      ],
      bullets: [
        "Built from zero to MVP in 4 weeks.",
        "Implemented AI-generated review responses using OpenAI API.",
        "Built automated review request workflows to increase review volume.",
        "Designed a centralized multi-client management platform.",
      ],
    },
  },
  {
    id: "inkfinity-creation",
    companyName: "Inkfinity Creation - Custom Apparel Platform",
    type: "Professional",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "Custom apparel platform enabling individuals and businesses to create personalized clothing with no minimum order requirements.",
    websiteLink: "https://www.inkfinitycreation.com",
    techStack: ["React", "Tailwind CSS", "Supabase"],
    startDate: new Date("2026-02-01"),
    endDate: new Date("2026-02-01"),
    companyLogoImg: "/projects/inkfinity-creation/logo.png",
    pagesInfoArr: [
      {
        title: "Platform Overview",
        description:
          "End-to-end custom apparel platform from design to delivery.",
        imgArr: ["/projects/inkfinity-creation/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Inkfinity Creation is a custom apparel platform enabling individuals and businesses to create personalized clothing with no minimum order requirements.",
        "It simplifies the entire process from design to delivery, making high-quality custom apparel accessible for small-scale and startup needs.",
      ],
      bullets: [
        "Built a full custom clothing platform with no minimum order requirements.",
        "Simplified the end-to-end process from design to delivery.",
        "Made high-quality custom apparel accessible for small-scale and startup needs.",
      ],
    },
  },
  {
    id: "first-signal",
    companyName: "First Signal - Idea Validation App",
    type: "Personal",
    category: ["Frontend", "Web Dev", "UI/UX"],
    shortDescription:
      "Startup idea validation tool with real-time, keyword-based scoring across market, audience, and monetization to help founders refine ideas before launch.",
    websiteLink: "https://first-signal-chi.vercel.app",
    techStack: ["React", "Tailwind CSS"],
    startDate: new Date("2026-02-01"),
    endDate: new Date("2026-02-01"),
    companyLogoImg: "/projects/first-signal/logo.png",
    pagesInfoArr: [
      {
        title: "Validation Dashboard",
        description:
          "Interactive scoring interface for evaluating startup ideas across key areas.",
        imgArr: ["/projects/first-signal/dashboard.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "FirstSignal helps founders validate startup ideas with real-time, keyword-based scoring across key areas like market, audience, and monetization.",
        "It provides instant feedback, interactive insights, and a dynamic UI to help refine ideas and identify gaps before launch.",
      ],
      bullets: [
        "Built real-time keyword-based scoring across market, audience, and monetization dimensions.",
        "Designed interactive insights and a dynamic UI with theme customization.",
        "Helps founders identify gaps and refine ideas before launch.",
      ],
    },
  },
  {
    id: "layout-iq",
    companyName: "Layout IQ",
    type: "Personal",
    category: ["UI/UX"],
    shortDescription:
      "Instant professional, print-ready business card designs from your info in seconds. Brand-sharp results with minimal design skills required.",
    techStack: ["Figma"],
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-06-01"),
    companyLogoImg: "/projects/layout-iq/logo.png",
    pagesInfoArr: [
      {
        title: "Design Interface",
        description:
          "Quick business card generation with professional, print-ready output.",
        imgArr: ["/projects/layout-iq/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Layout IQ creates professional, print-ready business card designs from your info in seconds.",
        "Brand-sharp results with minimal design skills required — simplifying the design process for everyone.",
      ],
      bullets: [
        "Designed a streamlined flow for instant business card generation.",
        "Created print-ready, brand-consistent output templates.",
        "Built the UI/UX and landing page design in Figma.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
