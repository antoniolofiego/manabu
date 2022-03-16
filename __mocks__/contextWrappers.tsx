import { UserContext } from '@context/user';
import { mockUser } from './user';

export const loginEmail = jest.fn();
export const loginDiscord = jest.fn();
export const loginGithub = jest.fn();
export const logout = jest.fn();

export const wrapperWithUser: React.FC = ({ children }) => (
  <UserContext.Provider
    value={{
      user: mockUser,
      loginEmail: loginEmail,
      loginDiscord: loginDiscord,
      loginGithub: loginGithub,
      logout: logout,
      isLoading: false,
    }}
  >
    {children}
  </UserContext.Provider>
);

export const wrapperWithoutUser: React.FC = ({ children }) => (
  <UserContext.Provider
    value={{
      user: null,
      loginEmail: loginEmail,
      loginDiscord: loginDiscord,
      loginGithub: loginGithub,
      logout: logout,
      isLoading: false,
    }}
  >
    {children}
  </UserContext.Provider>
);

export const loadingWrapper: React.FC = ({ children }) => (
  <UserContext.Provider
    value={{
      user: null,
      loginEmail: loginEmail,
      loginDiscord: loginDiscord,
      loginGithub: loginGithub,
      logout: logout,
      isLoading: true,
    }}
  >
    {children}
  </UserContext.Provider>
);
