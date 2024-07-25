import { Github, GithubIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface ISocialLinkProps {
  children: string
  icon: ReactNode
}

export function IconSpan({ children, icon }: ISocialLinkProps) {
  return (
    <div className={'flex gap-2'}>
      {icon}
      <span>{children}</span>
    </div>
  )
}
