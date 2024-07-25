import { Github, GithubIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface ISocialLinkProps {
  children: string
  icon: ReactNode
}

export function SocialLink({ children, icon }: ISocialLinkProps) {
  return (
    <div className={'flex gap-2'}>
      {icon}
      <span>{children}</span>
    </div>
  )
}
