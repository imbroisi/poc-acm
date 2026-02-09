import type { ContentItem } from '@/types/content';
import { ChartThumbnail } from '@/components/ChartThumbnail';
import './ContentCard.scss';

interface ContentCardProps {
  item: ContentItem;
}

const TAG_CLASS: Record<string, string> = {
  POPULAR: 'popular',
  'MARKET UPDATE': 'market-update',
  'SPECIAL TOPIC': 'special',
  DEI: 'dei',
  OUTLOOK: 'outlook',
};

function getTagClass(tag: string): string {
  return TAG_CLASS[tag] ?? 'default';
}

export function ContentCard({ item }: ContentCardProps) {
  const meta = [item.source, item.author, item.date].filter(Boolean).join(' • ');

  return (
    <article className="content-card">
      <div className="thumb">
        <ChartThumbnail type={item.chartType} title={item.title} />
      </div>
      <div className="body">
        <h3 className="title">{item.title}</h3>
        <p className="meta">{meta}</p>
        <p className="desc">{item.description}</p>
        <div className="tags">
          {item.tags.map((tag) => (
            <span key={tag} className={`tag ${getTagClass(tag)}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="icons">
        <span className="icon" />
        <span className="icon" />
        <span className="icon" />
      </div>
    </article>
  );
}
