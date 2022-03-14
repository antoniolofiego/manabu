DROP FUNCTION next_lesson_of_course;

CREATE OR REPLACE FUNCTION next_lesson_of_course(user_id uuid, course_id uuid)
RETURNS TABLE(id uuid, name text, lesson_number int4, image_url text, progress float, instructor_name text, instructor_id uuid, course_name text) AS 
$$
  SELECT 
    lessons.id,
    lessons.name,
    lessons.lesson_number,
    lessons.image_url,
    (lesson_number - 1) / (total_lessons * 1.0) as progress,
    instructors.name as instructor_name,
    instructors.id as instructor_id,
    courses.name as course_name
  FROM public.lessons
  JOIN public.progress ON public.progress.lesson_id = public.lessons.id
  JOIN public.courses on public.courses.id = public.lessons.course_id
  JOIN public.instructors on public.instructors.id = public.courses.instructor_id
  WHERE public.lessons.course_id = course_id
  AND user_id = user_id
  AND completed = false
  ORDER BY lesson_number
  LIMIT 1;
$$ LANGUAGE sql;