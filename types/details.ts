export type CourseDetails = {
  name: string;
  id: string;
  imageUrl: string;
  description?: string;
  shortDescription?: string;
};

export type InstructorDetails = {
  name: string;
  id: string;
  imageUrl?: string;
};

export type LessonDetails = {
  name: string;
  id: string;
  imageUrl: string;
  completed: boolean;
  lessonNumber: number;
  videoUrl: string;
  courseId?: string;
};

export interface ICourse extends CourseDetails {
  instructor: InstructorDetails;
}
export interface ICourseGroup {
  courses: ICourse[];
}
