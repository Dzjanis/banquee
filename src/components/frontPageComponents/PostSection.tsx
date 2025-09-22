import { PostList } from './postComponents/postList';
import { FaStar } from 'react-icons/fa';

export const PostSection = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-4 py-4 w-3/4 bg-white h-auto'>
      <p className='self-start'>testimonials</p>
      <div className='grid grid-cols-[3fr_2fr] w-full'>
        <h3 className='text-xl font-semibold text-[100px]'>People all over the world use banko.</h3>
        <div className='flex justify-end items-center gap-4'>
          <div
            className='
        flex items-center justify-center rounded-full bg-gray-200
        w-12 h-12 text-xl
        sm:w-10 sm:h-10 sm:text-lg
        md:w-8 md:h-8 md:text-base
        lg:w-12 lg:h-12 lg:text-xl
        text-emerald-400
        self-end
      '>
            <FaStar />
          </div>
          <p className='self-end leading-12'>
            Rated <span className='text-emerald-400'>4.8/5</span> from over 1000 users
          </p>
        </div>
      </div>
      <PostList />
    </div>
  );
};
