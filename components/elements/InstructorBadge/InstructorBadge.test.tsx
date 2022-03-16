import { render, screen } from '@testing-library/react';
import { InstructorBadge } from '.';

const sampleInstructor = {
  name: 'Michael Instructor',
  id: 'michael',
  imageUrl: 'https://exampleurl.com/image.jpeg',
  description: 'A sample instructor',
};

describe('The instructor badge', () => {
  it('renders appropriately', () => {
    render(<InstructorBadge instructor={sampleInstructor} />);

    expect(
      screen.getByAltText(/Michael Instructor profile picture/i)
    ).toBeInTheDocument();
  });

  it('renders the appropriate link tags', () => {
    render(<InstructorBadge instructor={sampleInstructor} />);

    expect(screen.getAllByTestId('link')).toHaveLength(2);
  });

  it("doesn't render link tags when noNav is passed", () => {
    render(<InstructorBadge instructor={sampleInstructor} noNav />);

    const links = screen.queryAllByTestId('link');
    expect(links).toHaveLength(0);
  });

  it('provides the correct href URL to each link', () => {
    render(<InstructorBadge instructor={sampleInstructor} />);

    const links = screen.getAllByTestId('link');
    links.forEach((link) => {
      expect(link.closest('a')).toHaveAttribute(
        'href',
        '/courses?instructorId=michael'
      );
    });
  });
});
