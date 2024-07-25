import { Card, CardContent } from '@/components/ui/card.tsx'
import avatar from '../../assets/avatar.jpg'
import { SocialLink } from '@/components/socialLink.tsx'
import { GithubIcon } from '@/assets/github-icon.tsx'
import { FolderGit2Icon, Rocket } from 'lucide-react'

export function Header() {
  return (
    <Card className={'bg-gray-850 border-0 outline-0 p-0 text-white'}>
      <CardContent className={'flex gap-6 p-6'}>
        <picture className={'block size-[225px]'}>
          <img
            className={'max-w-max h-full object-center object-cover rounded '}
            src={avatar}
            alt="Imagem de Perfil"
          />
        </picture>

        <div className={'flex flex-col justify-between'}>
          <div className={'flex justify-between items-center'}>
            <h1 className={'text-2xl font-bold'}>Itallo Vidal</h1>
            <a href="">Github</a>
          </div>

          <p className={'max-w-[80%]'}>
            Sobre Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            asperiores aspernatur eius exercitationem libero nesciunt quaerat
            reiciendis veritatis voluptatem. Aliquid amet aperiam aspernatur at
            eveniet ipsa quaerat quis saepe voluptatum?
          </p>

          <div className={'flex gap-6'}>
            <SocialLink icon={<GithubIcon />}>Github</SocialLink>
            <SocialLink icon={<Rocket />}>Rocketseat</SocialLink>
            <SocialLink icon={<FolderGit2Icon />}>Repositórios</SocialLink>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
