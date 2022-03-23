import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ActionButton } from './';

const clickHandler = jest.fn();

const mockActionButtonProps = {
  status: false,
  loading: false,
  clickHandler: clickHandler,
  statusPrompt: {
    trueState: 'True state',
    falseState: 'False state',
  },
};

describe('The Action Button', () => {
  const setStateMock = jest.fn();

  const useStateMock = (useState: unknown) => [useState, setStateMock];

  const useStateSpy = jest.spyOn(React, 'useState');

  //@ts-ignore
  useStateSpy.mockImplementation(useStateMock);

  it('renders appropriately', () => {
    render(<ActionButton {...mockActionButtonProps} />);

    expect(screen.getByText(/False state/i)).toBeInTheDocument();
  });

  it('renders a loading spinner when loading', () => {
    render(<ActionButton {...mockActionButtonProps} loading={true} />);

    expect(screen.getByTestId(/spinner/i)).toBeInTheDocument();
  });

  it('switches between true and false states', () => {
    render(
      <ActionButton {...mockActionButtonProps} clickHandler={setStateMock} />
    );

    userEvent.click(screen.getByText(/false state/i));

    expect(setStateMock).toHaveBeenCalled();
  });

  it('shows the true state when status is true', () => {
    render(<ActionButton {...mockActionButtonProps} status={true} />);

    userEvent.click(screen.getByText(/true state/i));

    expect(setStateMock).toHaveBeenCalled();
  });
});
