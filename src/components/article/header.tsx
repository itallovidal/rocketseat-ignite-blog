import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card.tsx'
import { SocialLink } from '@/components/socialLink.tsx'
import { GithubIcon } from '@/assets/github-icon.tsx'
import { Calendar, MessageSquare } from 'lucide-react'

export function Header() {
  return (
    <Card className={'bg-gray-850 border-0 outline-0 p-0 text-white'}>
      <CardHeader className={' flex flex-row justify-between items-center'}>
        <a href="">Voltar</a>
        <a href="">Ver no Github</a>
      </CardHeader>
      <CardContent className={'flex gap-6'}>
        <div className={'flex flex-col justify-between'}>
          <h1 className={'text-2xl font-bold'}>
            JavaScript data types and data structures
          </h1>
        </div>
      </CardContent>
      <CardFooter className={'flex gap-6'}>
        <SocialLink icon={<GithubIcon />}>itallo vidal</SocialLink>
        <SocialLink icon={<Calendar />}>Há 1 dia</SocialLink>
        <SocialLink icon={<MessageSquare />}>3 Comentários</SocialLink>
      </CardFooter>
    </Card>
  )
}
