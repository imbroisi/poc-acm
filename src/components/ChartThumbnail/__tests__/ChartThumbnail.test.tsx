import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { ChartThumbnail } from '../ChartThumbnail'

vi.mock('react-chartjs-2', () => ({
  Line: () => <div data-testid="line-chart" />,
  Bar: () => <div data-testid="bar-chart" />,
  Doughnut: () => <div data-testid="pie-chart" />,
}))

describe('ChartThumbnail', () => {
  it('renders grid placeholder when type is "grid"', () => {
    const { container } = render(<ChartThumbnail type="grid" />)

    const placeholder = container.querySelector('.chart-thumb.placeholder')
    expect(placeholder).toBeInTheDocument()

    const cells = container.querySelectorAll('.cell')
    expect(cells.length).toBe(12)
  })

  it('renders circle placeholder when type is "circle"', () => {
    render(<ChartThumbnail type="circle" />)

    expect(document.querySelector('.circle')).toBeInTheDocument()
    expect(document.querySelector('.inner')).toBeInTheDocument()
  })

  it('renders bar placeholder when type is undefined', () => {
    render(<ChartThumbnail />)

    expect(document.querySelector('.bar-placeholder')).toBeInTheDocument()
  })

  it('renders line chart when type is "line"', () => {
    render(<ChartThumbnail type="line" />)

    expect(screen.getByTestId('line-chart')).toBeInTheDocument()
  })
})
