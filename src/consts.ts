import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Paolo Zanotti",
  DESCRIPTION:
    "I'm a software engineer crafting custom software solutions for businesses and individuals. Explore my portfolio and see how I can help you!",
  EMAIL: "hello@paolozanotti.dev",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "I'm a software engineer creating custom software solutions for businesses and individuals. Explore my portfolio and see how I can help you!",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION:
    "A quick summary of my work and school experiences, as well as my core skills.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Email",
    HREF: "mailto:hello@paolozanotti.dev",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/zanottipaolo",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://linkedin.com/in/paolo-zanotti",
  },
  {
    NAME: "HackerRank",
    HREF: "https://www.hackerrank.com/zanottipaolo",
  },
];
