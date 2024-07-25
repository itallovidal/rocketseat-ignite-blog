import { Header } from '@/components/home/header.tsx'
import { SearchBar } from '@/components/home/searchBar.tsx'
import { ArticleCard } from '@/components/home/article-card.tsx'

export function Home() {
  return (
    <>
      <Header />
      <SearchBar />

      <div className={'flex justify-between flex-wrap gap-4 mt-12'}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </>
  )
}
