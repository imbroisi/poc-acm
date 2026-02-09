import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import type { ScheduledBook, FavoriteBook } from '@/types/content'
import { BooksSection } from './BooksSection'

const scheduled: ScheduledBook[] = [
  {
    id: 's1',
    title: 'June Review',
    client: 'Client A',
    type: 'Scheduled Monthly',
    date: '2024-06-07',
    dateLabel: 'June 7 2024',
  },
]

const favorites: FavoriteBook[] = [
  {
    id: 'f1',
    title: 'Favorite Book 1',
    client: 'Client B',
    lastUpdated: 'Apr 23, 2024',
    chartType: 'bar',
  },
]

describe('BooksSection', () => {
  it('renders titles for scheduled and favorite books', () => {
    render(
      <MemoryRouter>
        <BooksSection scheduled={scheduled} favorites={favorites} />
      </MemoryRouter>,
    )

    expect(screen.getByText('Books')).toBeInTheDocument()
    expect(screen.getByText('June Review')).toBeInTheDocument()
    expect(screen.getByText('Favorite Book 1')).toBeInTheDocument()
    expect(screen.getByText(/view all/i)).toBeInTheDocument()
  })
})

