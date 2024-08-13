import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Paolo Zanotti",
  DESCRIPTION:
    "Hello World! My name is Paolo Zanotti and I'm a Software Engineer. This is my portfolio, check out my projects and if you are interested get in touch with me.",
  EMAIL: "hello@paolozanotti.dev",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
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
