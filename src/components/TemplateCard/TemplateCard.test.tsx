import { render, screen } from '@testing-library/react'
import type { TemplateItem } from '@/types/content'
import { TemplateCard } from './TemplateCard'

const item: TemplateItem = {
  id: 't1',
  title: 'Portfolio Update',
  author: 'Jane Doe',
  date: 'May 14, 2024',
  description: 'Lorem ipsum dolor sit amet.',
  tags: ['POPULAR', 'EXPOSURES'],
  chartType: 'pie',
}

describe('TemplateCard', () => {
  it('renders template information and tags', () => {
    render(<TemplateCard item={item} />)

    expect(screen.getByText(item.title)).toBeInTheDocument()
    expect(screen.getByText(/Jane Doe • May 14, 2024/)).toBeInTheDocument()
    expect(screen.getByText(item.description)).toBeInTheDocument()
    expect(screen.getByText('POPULAR')).toBeInTheDocument()
    expect(screen.getByText('EXPOSURES')).toBeInTheDocument()
  })
})

