import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SocialLoginButton } from '.';

import {
  loginDiscord,
  loginGithub,
  wrapperWithoutUser,
} from '@mocks/contextWrappers';

describe('The social login button', () => {
  it('renders appropriately for Discord', () => {
    render(<SocialLoginButton provider='Discord' />);

    expect(screen.getByText(/Log in with Discord/i)).toBeInTheDocument();
  });

  it('renders appropriately for GitHub', () => {
    render(<SocialLoginButton provider='GitHub' />);

    expect(screen.getByText(/Log in with GitHub/i)).toBeInTheDocument();
  });

  it('calls the loginDiscord strategy when clicking on Discord', () => {
    render(<SocialLoginButton provider='Discord' />, {
      wrapper: wrapperWithoutUser,
    });

    userEvent.click(screen.getByText('Log in with Discord'));

    expect(loginDiscord).toHaveBeenCalled();
  });

  it('calls the loginGithub strategy when clicking on GitHub', () => {
    render(<SocialLoginButton provider='GitHub' />, {
      wrapper: wrapperWithoutUser,
    });

    userEvent.click(screen.getByText('Log in with GitHub'));

    expect(loginGithub).toHaveBeenCalled();
  });
});
