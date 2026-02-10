import { Link } from 'react-router-dom';
import type { ContentItem } from '@/types/content';
import { ContentCard } from '@/components/ContentCard';
import { IconFolder } from '@/icons';
import './ContentLibrary.scss';

interface ContentLibraryProps {
  newPopular: ContentItem[];
  recents: ContentItem[];
}

export const ContentLibrary = ({ newPopular, recents }: ContentLibraryProps) => {
  return (
    <section className="content-library">
      <div className="head">
        <div className="title-wrap">
          <IconFolder className="icon" />
          <h2 className="title">Content Library</h2>
        </div>
        <Link to="/content-library" className="view-all">
          view all
        </Link>
      </div>
      <p className="sub">NEW / POPULAR</p>
      <div className="cards">
        {newPopular.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </div>
      <p className="sub recents">RECENTS</p>
      <div className="cards">
        {recents.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
