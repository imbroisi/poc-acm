import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import type { TemplateItem } from '@/types/content';
import { TemplatesSection } from '../TemplatesSection';

const makeItem = (id: string, title: string): TemplateItem => ({
  id,
  title,
  author: 'Author',
  date: '2024-01-01',
  description: 'Desc',
  tags: [],
  chartType: 'line',
});

describe('TemplatesSection', () => {
  it('renders title and cards for new popular and recents', () => {
    const newPopular = [makeItem('1', 'New Template 1')];
    const recents = [makeItem('2', 'Recent Template 1')];

    render(
      <MemoryRouter>
        <TemplatesSection newPopular={newPopular} recents={recents} />
      </MemoryRouter>,
    );

    expect(screen.getByText('Templates')).toBeInTheDocument();
    expect(screen.getByText('New Template 1')).toBeInTheDocument();
    expect(screen.getByText('Recent Template 1')).toBeInTheDocument();
    expect(screen.getByText(/view all/i)).toBeInTheDocument();
  });
});
