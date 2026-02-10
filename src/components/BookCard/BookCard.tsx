import type { FavoriteBook } from '@/types/content'
import { ChartThumbnail } from '@/components/ChartThumbnail'
import './BookCard.scss'

interface BookCardProps {
  item: FavoriteBook
}

export const BookCard = ({ item }: BookCardProps) => {
  return (
    <article className="book-card">
      <div className="body">
        <span className="star" aria-label="Favorite">
          ★
        </span>
        <h3 className="title">{item.title}</h3>
        <p className="meta">
          {item.client} • Last Updated {item.lastUpdated}
        </p>
      </div>
      <div className="thumb">
        <ChartThumbnail type={item.chartType} />
      </div>
    </article>
  )
}
