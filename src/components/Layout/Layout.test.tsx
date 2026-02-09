import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import type { User } from '@/types/content'
import { Layout } from './Layout'

const user: User = {
  name: 'Maria Martinez',
}

describe('Layout', () => {
  it('renders header, main content and chat widget', () => {
    render(
      <MemoryRouter>
        <Layout user={user}>
          <div>Inner content</div>
        </Layout>
      </MemoryRouter>,
    )

    expect(screen.getByText('CLIENT MATERIALS')).toBeInTheDocument()
    expect(screen.getByText('Inner content')).toBeInTheDocument()
    expect(screen.getByText(/CAi Chat/i)).toBeInTheDocument()
  })
})

