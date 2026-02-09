export interface ContentItem {
  id: string;
  title: string;
  source: string;
  author?: string;
  date: string;
  description: string;
  tags: string[];
  chartType?: 'line' | 'bar' | 'pie' | 'scatter' | 'grid' | 'circle';
}

export interface TemplateItem {
  id: string;
  title: string;
  author: string;
  date: string;
  description: string;
  tags: string[];
  chartType?: 'line' | 'bar' | 'pie' | 'multi';
}

export interface ScheduledBook {
  id: string;
  title: string;
  client: string;
  type: string;
  date: string;
  dateLabel: string;
}

export interface FavoriteBook {
  id: string;
  title: string;
  client: string;
  lastUpdated: string;
  chartType?: 'bar';
}

export interface DashboardData {
  contentLibrary: {
    newPopular: ContentItem[];
    recents: ContentItem[];
  };
  templates: {
    newPopular: TemplateItem[];
    recents: TemplateItem[];
  };
  books: {
    scheduled: ScheduledBook[];
    favorites: FavoriteBook[];
  };
}

export interface User {
  name: string;
  avatar?: string;
}
