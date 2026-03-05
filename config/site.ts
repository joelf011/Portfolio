export const siteConfig = {
  name: "Joel Fernandes",
  description: "Dedicated to building clean and structured web applications.",
  url: "http://localhost:3000",
  links: {
    github: "https://github.com/joelf011",
    linkedin: "https://linkedin.com/in/joel-fernandes011",
  },
  mainNav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;