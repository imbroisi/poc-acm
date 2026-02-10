import { Link } from 'react-router-dom';
import type { TemplateItem } from '@/types/content';
import { TemplateCard } from '@/components/TemplateCard';
import { IconDocument } from '@/icons';
import './TemplatesSection.scss';

interface TemplatesSectionProps {
  newPopular: TemplateItem[];
  recents: TemplateItem[];
}

export const TemplatesSection = ({ newPopular, recents }: TemplatesSectionProps) => {
  return (
    <section className="templates-section">
      <div className="head">
        <div className="title-wrap">
          <IconDocument className="icon" />
          <h2 className="title">Templates</h2>
        </div>
        <Link to="/templates" className="view-all">
          view all
        </Link>
      </div>
      <p className="sub">NEW / POPULAR</p>
      <div className="cards">
        {newPopular.map((item) => (
          <TemplateCard key={item.id} item={item} />
        ))}
      </div>
      <p className="sub recents">RECENTS</p>
      <div className="cards">
        {recents.map((item) => (
          <TemplateCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
