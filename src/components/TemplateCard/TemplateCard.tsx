import type { TemplateItem } from '@/types/content';
import { ChartThumbnail } from '@/components/ChartThumbnail';
import './TemplateCard.scss';

interface TemplateCardProps {
  item: TemplateItem;
}

const TAG_CLASS: Record<string, string> = {
  POPULAR: 'popular',
  EXPOSURES: 'exposures',
  PENSIONS: 'pensions',
  PERFORMANCE: 'performance',
  FACTSHEET: 'default',
  RISK: 'default',
  ATTRIBUTION: 'default',
};

function getTagClass(tag: string): string {
  return TAG_CLASS[tag] ?? 'default';
}

export function TemplateCard({ item }: TemplateCardProps) {
  return (
    <article className="template-card">
      <div className="thumb">
        <ChartThumbnail type={item.chartType} title={item.title} />
      </div>
      <div className="body">
        <h3 className="title">{item.title}</h3>
        <p className="meta">{item.author} • {item.date}</p>
        <p className="desc">{item.description}</p>
        <div className="tags">
          {item.tags.map((tag) => (
            <span key={tag} className={`tag ${getTagClass(tag)}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
