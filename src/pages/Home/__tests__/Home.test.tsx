import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import type { DashboardData, User } from '@/types/content';
import { useApiHome } from '@/hooks/useApiHome';
import { Home } from '../Home';

vi.mock('@/hooks/useApiHome');

const mockUseApiHome = vi.mocked(useApiHome);

const baseUser: User = {
  name: 'Maria Martinez',
};

const baseData: DashboardData = {
  contentLibrary: {
    newPopular: [],
    recents: [],
  },
  templates: {
    newPopular: [],
    recents: [],
  },
  books: {
    scheduled: [],
    favorites: [],
  },
};

describe('Home', () => {
  it('renders loading state', () => {
    mockUseApiHome.mockReturnValue({
      user: null,
      data: null,
      loading: true,
      error: null,
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('renders error state', () => {
    mockUseApiHome.mockReturnValue({
      user: null,
      data: null,
      loading: false,
      error: 'Erro ao carregar',
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Erro ao carregar/i)).toBeInTheDocument();
  });

  it('renders main sections when data is loaded', () => {
    mockUseApiHome.mockReturnValue({
      user: baseUser,
      data: baseData,
      loading: false,
      error: null,
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Welcome to Client Materials/i)).toBeInTheDocument();
    expect(screen.getByText(/Content Library/i)).toBeInTheDocument();
    expect(screen.getByText(/Templates/i)).toBeInTheDocument();
    expect(screen.getByText(/Books/i)).toBeInTheDocument();
  });
});
