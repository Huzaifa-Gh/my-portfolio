import { Metadata } from "next";
import { Mail, Github, Linkedin } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

import PageContainer from "@/components/common/page-container";
import GithubRedirectCard from "@/components/contact/github-redirect-card";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

const contactLinks = [
  {
    icon: Mail,
    label: "huzaifaghumman2512@gmail.com",
    href: "mailto:huzaifaghumman2512@gmail.com",
  },
  {
    icon: BsWhatsapp,
    label: "+92-334-4385994",
    href: "https://wa.me/923344385994",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/huzaifa-ghumman-966050240",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Huzaifa-Gh",
  },
];

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="flex-1 space-y-6">
          <p className="text-lg text-muted-foreground">
            Feel free to reach out — I&apos;m always open to new opportunities
            and collaborations.
          </p>
          <div className="space-y-5">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-4 p-4 rounded-lg border border-border bg-background hover:bg-muted transition-all duration-200"
              >
                <link.icon className="w-5 h-5 text-primary" />
                <span className="text-foreground">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <GithubRedirectCard />
        </div>
      </div>
    </PageContainer>
  );
}
