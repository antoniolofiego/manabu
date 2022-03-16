import '@testing-library/jest-dom/extend-expect';
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

jest.mock('@utils/supabase', () => ({
  supabase: {
    auth: {
      user() {
        return { user: mockUser };
      },
    },
  },
}));

jest.mock('@supabase/supabase-js', () => ({
  createClient() {
    return {};
  },
  auth: {
    user() {
      return { user: mockUser };
    },
    signIn() {
      return {
        user: mockUser,
        session: {},
        error: null,
      };
    },
    signOut() {
      return {
        error: null,
      };
    },
  },
}));
