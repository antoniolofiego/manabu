import { render, screen } from '@testing-library/react';
import Sidebar from '.';
import * as UserContext from '@context/user';

import { mockUser } from '@mocks/user';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe('The sidebar', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders normally', () => {
    render(<Sidebar />);
    expect(screen.getByText('manabu')).toBeInTheDocument();
  });

  it('shows login if user is not logged in', () => {
    jest.spyOn(UserContext, 'useUser').mockImplementation(() => {
      return {
        user: null,
        isLoading: false,
        loginEmail: () => {},
        loginGithub: () => {},
        loginDiscord: () => {},
        logout: () => {},
      };
    });

    render(<Sidebar />);

    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('shows settings if user is logged in', () => {
    jest.spyOn(UserContext, 'useUser').mockImplementation(() => {
      return {
        user: mockUser,
        isLoading: false,
        loginEmail: () => {},
        loginGithub: () => {},
        loginDiscord: () => {},
        logout: () => {},
      };
    });

    render(<Sidebar />);

    screen.getByText('Settings');
  });
});
