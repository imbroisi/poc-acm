import { render, screen } from '@testing-library/react'
import type { FavoriteBook } from '@/types/content'
import { BookCard } from './BookCard'

const item: FavoriteBook = {
  id: 'b1',
  title: 'MLH Annual Review',
  client: 'Main Line Health Pension',
  lastUpdated: 'Apr 23, 2024',
  chartType: 'bar',
}

describe('BookCard', () => {
  it('renders book information and favorite star', () => {
    render(<BookCard item={item} />)

    expect(screen.getByText(item.title)).toBeInTheDocument()
    expect(
      screen.getByText(`${item.client} • Last Updated ${item.lastUpdated}`),
    ).toBeInTheDocument()

    const star = screen.getByLabelText('Favorite')
    expect(star).toBeInTheDocument()
  })
})

