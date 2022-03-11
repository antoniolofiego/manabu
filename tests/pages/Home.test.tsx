import { render, screen } from '@testing-library/react';
import Home from '@pages/home';

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

describe('App', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText('manabu')).toBeInTheDocument();
  });
});
