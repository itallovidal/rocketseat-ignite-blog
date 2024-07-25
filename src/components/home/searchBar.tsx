import { Input } from '@/components/ui/input.tsx'

export function SearchBar() {
  return (
    <div className={'space-y-4 w-full mt-12'}>
      <div className={'flex justify-between'}>
        <h1 className={'text-2xl font-bold'}>Publicações</h1>
        <span className={'opacity-40'}>6 postagens</span>
      </div>

      <div className={'flex flex-col gap-4'}>
        <Input
          placeholder={'Buscar conteúdo'}
          className={' bg-gray-850 border-gray-800'}
        />
        {/* {<span className={' text-rose-700/80'}>Erro ao buscar</span>} */}
      </div>
    </div>
  )
}
