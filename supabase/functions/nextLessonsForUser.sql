DROP FUNCTION next_lessons_for_user;

CREATE OR REPLACE FUNCTION next_lessons_for_user(user_id uuid) 
RETURNS TABLE(course_id uuid, name text, lesson_number int4, image_url text, id uuid, progress float, instructor_name text, instructor_id uuid, course_name text) AS $$
  SELECT DISTINCT ON (course_id) 
    lessons.course_id, 
    lessons.name,
    lessons.lesson_number,
    lessons.image_url, 
    lessons.id, 
    (lesson_number - 1) / (total_lessons * 1.0) as progress,
    instructors.name as instructor_name,
    instructors.id as instructor_id,
    courses.name as course_name
  FROM public.lessons
  JOIN public.progress ON public.progress.lesson_id = public.lessons.id
  JOIN public.courses on public.courses.id = public.lessons.course_id
  JOIN public.instructors on public.instructors.id = public.courses.instructor_id
  WHERE user_id = user_id
  AND completed = false
  ORDER BY lessons.course_id, lessons.lesson_number;
$$ LANGUAGE sql;
