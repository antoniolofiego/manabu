DROP FUNCTION generate_progress;

CREATE OR REPLACE FUNCTION generate_progress(userid uuid, courseid uuid) RETURNS void AS $$
  INSERT INTO public.progress(user_id, lesson_id, completed)
  SELECT userid, lessons.id, false FROM lessons 
  WHERE lessons.course_id = courseid;
$$ language sql;