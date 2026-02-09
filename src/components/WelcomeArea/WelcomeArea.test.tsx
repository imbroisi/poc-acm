import { render, screen } from '@testing-library/react'
import { WelcomeArea } from './WelcomeArea'

describe('WelcomeArea', () => {
  it('renders welcome message with user name', () => {
    render(<WelcomeArea userName="Maria" />)

    expect(
      screen.getByText(/Welcome to Client Materials, Maria!/i),
    ).toBeInTheDocument()
  })
})

