import { render, screen } from '@testing-library/react';
import { LessonCard } from '.';

const sampleLesson = {
  lesson: {
    name: 'Lesson 3',
    id: 'lesson-3',
    imageUrl: 'https://sample.url/image.png',
    completed: false,
    lessonNumber: 3,
    videoUrl: 'https://youtube.com/watch?v=123',
    courseId: 'course-123',
  },
  currentLessonId: 'lesson-1',
};

describe('The progress card', () => {
  it('renders appropriately', () => {
    render(<LessonCard {...sampleLesson} />);

    expect(screen.getByText(/Lesson 3/i)).toBeInTheDocument();
  });

  it('renders a graphic symbol if completed', () => {
    render(
      <LessonCard
        lesson={{ ...sampleLesson.lesson, completed: true }}
        currentLessonId={sampleLesson.currentLessonId}
      />
    );

    expect(screen.getByTestId('completed')).toBeInTheDocument();
  });

  it("changes color on hover if it doesn't link to the currently playing lesson", () => {
    render(<LessonCard {...sampleLesson} />);

    const card = screen.getByTestId('lesson-card-lesson-3');
    expect(card).not.toHaveClass('bg-gray-200');
  });

  it('does not change color on hover if it links to the currently playing lesson', () => {
    render(
      <LessonCard lesson={sampleLesson.lesson} currentLessonId='lesson-3' />
    );

    const card = screen.getByTestId('lesson-card-lesson-3');
    expect(card).toHaveClass('bg-gray-200');
  });
});
