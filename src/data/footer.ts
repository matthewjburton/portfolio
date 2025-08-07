import { basename } from "@/router/basename";

export const footer = [
  {
    link: basename === '/' ? basename : `https://matthewjburton.github.io${basename}`,
    icon: 'fa-solid fa-home',
    tooltip: 'Home',
  },
  {
    link: 'mailto:mattjburton64@gmail.com',
    icon: 'fa-solid fa-envelope',
    tooltip: 'Email',
  },
  {
    link: 'https://github.com/matthewjburton',
    icon: 'fa-brands fa-github',
    tooltip: 'Github',
  },
  {
    link: 'https://www.linkedin.com/in/matthew-j-burton/',
    icon: 'fa-brands fa-linkedin',
    tooltip: 'LinkedIn',
  },
]
