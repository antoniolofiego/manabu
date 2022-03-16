DROP FUNCTION get_course_details;

CREATE OR REPLACE FUNCTION get_course_details(courseid uuid) 
RETURNS TABLE(course_name text, course_id uuid, course_image_url text, course_description text, instructor_name text, instructor_id uuid, instructor_image_url text) AS $$
  SELECT
    courses.name AS course_name,
    courses.id AS course_id,
    courses.image_url AS course_image_url,
    courses.description AS course_description,
    instructors.name AS instructor_name,
    instructors.id AS instructor_id,
    instructors.image_url AS instructor_image_url
  FROM public.courses
  JOIN public.instructors on public.instructors.id = public.courses.instructor_id
  WHERE courses.id = courseid;
$$ LANGUAGE sql;