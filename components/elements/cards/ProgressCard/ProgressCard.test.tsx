import { render, screen } from '@testing-library/react';
import { ProgressCard } from '.';

const sampleCourse = {
  name: 'Course name',
  courseID: 'courseid',
  instructor: 'Michael Instructor',
  instructorID: 'michael',
  lessonName: '3. Lesson name',
  progress: 0.33,
  url: 'courses/couseid/lessonName',
  imageUrl: 'https://sample.url/image.png',
};

describe('The progress card', () => {
  it('renders appropriately', () => {
    render(<ProgressCard {...sampleCourse} />);

    expect(screen.getByText(/Michael Instructor/i)).toBeInTheDocument();
  });

  it('shows the correct progress', () => {
    render(<ProgressCard {...sampleCourse} />);

    expect(screen.getByText('33%')).toBeInTheDocument();
  });

  it('redirects to the courses by the instructor when clicking the instructor name', () => {
    render(<ProgressCard {...sampleCourse} />);

    expect(screen.getByText('Michael Instructor').closest('a')).toHaveAttribute(
      'href',
      '/courses?instructorId=michael'
    );
  });

  it('prompts to "Get Started" if progress is 0', () => {
    render(<ProgressCard {...sampleCourse} progress={0} />);

    expect(screen.getByText(/Get started/i)).toBeInTheDocument();
  });
});
