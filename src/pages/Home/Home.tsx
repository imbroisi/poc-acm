import { WelcomeArea } from '@/components/WelcomeArea'
import { ContentLibrary } from '@/components/ContentLibrary'
import { TemplatesSection } from '@/components/TemplatesSection'
import { BooksSection } from '@/components/BooksSection'
import { useApiHome } from '@/hooks/useApiHome'
import './Home.scss'

export const Home = () => {
  const { user, data, loading, error } = useApiHome()

  if (loading) {
    return (
      <div className="home">
        <div className="loading">
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="home">
        <div className="error">
          <p>{error ?? 'Failed to load dashboard'}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="home">
      <WelcomeArea userName={user?.name ?? 'User'} />
      <div className="grid">
        <ContentLibrary
          newPopular={data.contentLibrary.newPopular}
          recents={data.contentLibrary.recents}
        />
        <TemplatesSection newPopular={data.templates.newPopular} recents={data.templates.recents} />
        <BooksSection scheduled={data.books.scheduled} favorites={data.books.favorites} />
      </div>
    </div>
  )
}
