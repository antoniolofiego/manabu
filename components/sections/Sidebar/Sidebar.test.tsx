import { render, screen } from '@testing-library/react';
import { Sidebar } from '.';
import * as UserContext from '@context/user';

import { mockUser } from '@mocks/user';

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
