import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import type { User } from '@/types/content'
import { Header } from './Header'

const user: User = {
  name: 'Maria Martinez',
}

describe('Header', () => {
  it('renders navigation links and highlights active route', () => {
    render(
      <MemoryRouter initialEntries={['/templates']}>
        <Header user={user} />
      </MemoryRouter>,
    )

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Templates')).toBeInTheDocument()

    const templatesLink = screen.getByText('Templates')
    expect(templatesLink).toHaveClass('active')
  })

  it('shows user initial in avatar', () => {
    render(
      <MemoryRouter>
        <Header user={user} />
      </MemoryRouter>,
    )

    expect(screen.getByText('M')).toBeInTheDocument()
  })
})

