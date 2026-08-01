import type { ComponentType } from 'react'
import { Home, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons'
import { basename } from '@/router/basename'

export interface FooterAction {
  link: string
  icon: ComponentType<{ className?: string }>
  tooltip: string
}

export const footer: FooterAction[] = [
  {
    link:
      basename === '/'
        ? basename
        : `https://matthewjburton.github.io${basename}`,
    icon: Home,
    tooltip: 'Home',
  },
  {
    link: 'mailto:mattjburton64@gmail.com',
    icon: Mail,
    tooltip: 'Email',
  },
  {
    link: 'https://github.com/matthewjburton',
    icon: GithubIcon,
    tooltip: 'Github',
  },
  {
    link: 'https://www.linkedin.com/in/matthew-j-burton/',
    icon: LinkedinIcon,
    tooltip: 'LinkedIn',
  },
]
