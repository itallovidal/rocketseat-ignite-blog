import backdrop from '../assets/backdrop.png'

export function AppLayout({ children }) {
  return (
    <div className={'min-h-screen bg-gray-900'}>
      <picture className={'block w-full h-[300px] overflow-hidden'}>
        <img
          className={'w-full object-center object-cover max-h-full'}
          src={backdrop}
          alt="Imagem de fundo"
        />
      </picture>
      <main
        className={'text-white m-auto max-w-grid-width -mt-[150px] relative'}
      >
        {children}
      </main>
    </div>
  )
}
