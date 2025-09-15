import { PostList } from './postComponents/postList';

export const PostSection = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-[120px] py-4 w-full bg-white h-auto'>
      <h2 className='text-2xl font-bold text-center my-6'>People all over the world use banko.</h2>
      <PostList />
    </div>
  );
};
