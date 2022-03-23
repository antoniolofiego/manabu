import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SearchIcon } from '@heroicons/react/outline';

import { supabase } from '@utils/supabase';

type SearchResults = {
  lessonId: string;
  lessonName: string;
  lessonNumber: number;
  courseId: string;
  courseName: string;
};

export const SearchBar: React.FC = () => {
  const [lessons, setLessons] = useState<SearchResults[]>([]);
  const [searchTerms, setSearchTerms] = useState('');

  useEffect(() => {
    const getSearchTerms = async () => {
      const { data, error } = await supabase
        .from('lessons')
        .select('id, name, lesson_number, courses(id, name)');

      if (error) {
        console.error(error);
        return;
      }

      if (data) {
        const lessons = data.map((lesson) => {
          return {
            lessonId: lesson.id,
            lessonName: lesson.name,
            lessonNumber: lesson.lesson_number,
            courseId: lesson.courses.id,
            courseName: lesson.courses.name,
          };
        });
        setLessons(lessons);
      }
    };

    getSearchTerms();
  }, []);

  const filteredLessons = searchTerms
    ? lessons.filter((lesson) => {
        return lesson.lessonName
          .toLowerCase()
          .includes(searchTerms.toLowerCase());
      })
    : [];

  return (
    <form className='w-full my-8 border border-black group dark:border-gray-50 ring-0 focus:ring-0 rounded-xl'>
      <div className='flex items-center'>
        <SearchIcon className='h-4 pl-4' />
        <input
          className='w-full px-4 py-2 mx-2 my-1 text-sm transition-all border-0 focus:outline-none dark:bg-gray-900 bg-gray-50 dark:placeholder-gray-400 md:text-md'
          placeholder='Search'
          value={searchTerms}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setSearchTerms(e.currentTarget.value)
          }
        />
      </div>
      {filteredLessons.length > 0 && (
        <ul className='fixed dark:bg-gray-900 bg-gray-50 z-[100] border-2'>
          {filteredLessons.map((lesson, i) => (
            <li key={i}>
              <Link
                href={`/courses/${lesson.courseId}/${lesson.lessonId}`}
                passHref
              >
                <div className='flex items-center px-4 py-2 space-x-3 cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-300 dark:bg-gray-900 group'>
                  <span className='font-bold'>{`${lesson.lessonName}`} </span>
                  <span className='text-sm dark:text-gray-600 dark:group-hover:text-gray-400'>{`in ${lesson.courseName}`}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};
