import { AppLayout } from '@/components/app-layout.tsx'
import { Home } from '@/pages/home.tsx'
import { Article } from '@/pages/article.tsx'

export function App() {
  return (
    <AppLayout>
      {/* <Home /> */}
      <Article />
    </AppLayout>
  )
}
