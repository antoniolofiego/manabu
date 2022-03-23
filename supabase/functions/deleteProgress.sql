DROP function delete_progress;

CREATE OR REPLACE FUNCTION delete_progress(userid uuid, courseid uuid) RETURNS void AS $$
  DELETE FROM public.progress
  WHERE progress.user_id = userid
  AND progress.lesson_id IN (
    SELECT id
    FROM public.lessons
    WHERE lessons.course_id = courseid
  )
$$ language sql;
