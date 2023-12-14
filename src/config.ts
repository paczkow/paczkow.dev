import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://paczkow.dev", // replace this with your deployed domain
  author: "Michał Paczków",
  desc: "Personal blog. Write about JavaScript/Typescript, shipping fullstack stuff 🚀 and knowledge management using Obsidian",
  title: "paczkow.dev",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/paczkow",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/paczkow/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/_paczkow",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:michal.paczkow+paczkow.dev@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];
