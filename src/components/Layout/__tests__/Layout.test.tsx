import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { User } from '@/types/content';
import { Layout } from '../Layout';

const user: User = {
  name: 'Maria Martinez',
};

describe('Layout', () => {
  it('renders header, main content and chat widget', async () => {
    const userEvents = userEvent.setup();

    render(
      <MemoryRouter>
        <Layout user={user}>
          <div>Inner content</div>
        </Layout>
      </MemoryRouter>,
    );

    expect(screen.getByText('CLIENT MATERIALS')).toBeInTheDocument();
    expect(screen.getByText('Inner content')).toBeInTheDocument();

    // Chat widget inicialmente fechado - verifica o botão flutuante
    const openChatButton = screen.getByRole('button', { name: /Open CAi Chat/i });
    expect(openChatButton).toBeInTheDocument();

    // Abre o chat e verifica o título
    await userEvents.click(openChatButton);
    expect(await screen.findByText(/CAi Chat/i)).toBeInTheDocument();
  });
});
