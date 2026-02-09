import type { ScheduledBook } from '@/types/content';
import './ScheduledItem.scss';

interface ScheduledItemProps {
  item: ScheduledBook;
}

export function ScheduledItem({ item }: ScheduledItemProps) {
  const [month, day, year] = item.dateLabel.split(' ');
  return (
    <article className="scheduled-item">
      <div className="date">
        <span className="month">{month}</span>
        <span className="day">{day}</span>
        <span className="year">{year}</span>
      </div>
      <div className="content">
        <h3 className="title">{item.title}</h3>
        <p className="meta">{item.client} • {item.type}</p>
      </div>
    </article>
  );
}
