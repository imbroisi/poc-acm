import { render, screen } from '@testing-library/react'
import type { ContentItem } from '@/types/content'
import { ContentCard } from '../ContentCard'

const item: ContentItem = {
  id: '1',
  title: 'US Treasury Securities Outlook',
  source: 'Box',
  author: 'TLU Summary',
  date: 'May 14, 2024',
  description: 'We expect long US Treasury securities to remain range-bound.',
  tags: ['POPULAR', 'MARKET UPDATE'],
  chartType: 'line',
}

describe('ContentCard', () => {
  it('renders title, meta and description', () => {
    render(<ContentCard item={item} />)

    expect(screen.getByText(item.title)).toBeInTheDocument()
    expect(screen.getByText(/Box • TLU Summary • May 14, 2024/)).toBeInTheDocument()
    expect(screen.getByText(item.description)).toBeInTheDocument()
  })

  it('renders tags with correct labels', () => {
    render(<ContentCard item={item} />)

    expect(screen.getByText('POPULAR')).toBeInTheDocument()
    expect(screen.getByText('MARKET UPDATE')).toBeInTheDocument()
  })
})
