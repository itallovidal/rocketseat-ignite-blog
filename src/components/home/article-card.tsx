import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'

export function ArticleCard() {
  return (
    <Card
      className={'w-[calc(50%-theme(gap.2))] bg-gray-850 text-white border-0'}
    >
      <CardHeader>
        <CardTitle>JavaScript data types and data structures</CardTitle>
        <CardDescription className={'opacity-80'}>Há 1 dia.</CardDescription>
      </CardHeader>
      <CardContent>
        <span className={''}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis
          debitis dignissimos doloremque eveniet magnam molestiae necessitatibus
          nobis nulla porro sint suscipit tempore, tenetur totam voluptatem!
          Dolores excepturi nobis quia! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ad corporis debitis dignissimos doloremque eveniet
          magnam molestiae necessitatibus nobis nulla porro sint suscipit
          tempore, tenetur totam voluptatem! Dolores excepturi nobis quia! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis
          debitis dignissimos doloremque eveniet magnam molestiae necessitatibus
          nobis nulla porro sint suscipit tempore, tenetur totam voluptatem!
          Dolores excepturi nobis quia!
        </span>
      </CardContent>
      <CardFooter>
        <span>
          Escrito por <span className={'font-bold'}>Nome Da pessoa</span>
        </span>
      </CardFooter>
    </Card>
  )
}
