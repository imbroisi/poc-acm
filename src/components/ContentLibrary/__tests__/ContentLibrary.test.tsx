import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import type { ContentItem } from '@/types/content';
import { ContentLibrary } from '../ContentLibrary';

const makeItem = (id: string, title: string): ContentItem => ({
  id,
  title,
  source: 'Box',
  author: 'Author',
  date: '2024-01-01',
  description: 'Desc',
  tags: [],
  chartType: 'line',
});

describe('ContentLibrary', () => {
  it('renders title and cards for new popular and recents', () => {
    const newPopular = [makeItem('1', 'New Popular 1')];
    const recents = [makeItem('2', 'Recent 1')];

    render(
      <MemoryRouter>
        <ContentLibrary newPopular={newPopular} recents={recents} />
      </MemoryRouter>,
    );

    expect(screen.getByText('Content Library')).toBeInTheDocument();
    expect(screen.getByText('New Popular 1')).toBeInTheDocument();
    expect(screen.getByText('Recent 1')).toBeInTheDocument();
    expect(screen.getByText(/view all/i)).toBeInTheDocument();
  });
});
