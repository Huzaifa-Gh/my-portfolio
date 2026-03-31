import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@Huzaifa-Gh",
    icon: Icons.gitHub,
    link: "https://github.com/Huzaifa-Gh",
  },
  {
    name: "LinkedIn",
    username: "Huzaifa Ghumman",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/huzaifa-ghumman-966050240",
  },
  {
    name: "Gmail",
    username: "huzaifaghumman2512",
    icon: Icons.gmail,
    link: "mailto:huzaifaghumman2512@gmail.com",
  },
];
