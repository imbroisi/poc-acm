import { render, screen } from '@testing-library/react'
import type { ScheduledBook } from '@/types/content'
import { ScheduledItem } from '../ScheduledItem'

const item: ScheduledBook = {
  id: 's1',
  title: 'Main Line Health Pension - June 2024 Review',
  client: 'Main Line Health Pension',
  type: 'Scheduled Monthly',
  date: '2024-06-07',
  dateLabel: 'June 7 2024',
}

describe('ScheduledItem', () => {
  it('renders date and scheduled info correctly', () => {
    render(<ScheduledItem item={item} />)

    expect(screen.getByText('June')).toBeInTheDocument()
    expect(screen.getByText('7')).toBeInTheDocument()
    expect(screen.getByText('2024')).toBeInTheDocument()
    expect(screen.getByText(item.title)).toBeInTheDocument()
    expect(screen.getByText(`${item.client} • ${item.type}`)).toBeInTheDocument()
  })
})
