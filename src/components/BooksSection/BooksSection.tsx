import { Link } from 'react-router-dom';
import type { ScheduledBook, FavoriteBook } from '@/types/content';
import { ScheduledItem } from '@/components/ScheduledItem';
import { BookCard } from '@/components/BookCard';
import { IconBook } from '@/icons';
import './BooksSection.scss';

interface BooksSectionProps {
  scheduled: ScheduledBook[];
  favorites: FavoriteBook[];
}

export const BooksSection = ({ scheduled, favorites }: BooksSectionProps) => {
  return (
    <section className="books-section">
      <div className="head">
        <div className="title-wrap">
          <IconBook className="icon" />
          <h2 className="title">Books</h2>
        </div>
        <Link to="/my-books" className="view-all">
          view all
        </Link>
      </div>
      <p className="sub">SCHEDULED MATERIALS</p>
      <div className="scheduled">
        {scheduled.map((item) => (
          <ScheduledItem key={item.id} item={item} />
        ))}
      </div>
      <p className="sub favorites">FAVORITES</p>
      <div className="cards">
        {favorites.map((item) => (
          <BookCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
