import { usePosts } from './usePost';

export const PostList = () => {
  const { posts, loading } = usePosts();

  if (loading) return <div className='text-center py-4'>Загрузка...</div>;

  const favoritPosts = posts.slice(0, 6);

  return (
    <div className='grid w-3/4 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3'>
      {favoritPosts.map((post) => (
        <div key={post.id} className='border rounded-lg p-4 shadow-sm hover:shadow-md transition'>
          <h2 className='text-lg font-semibold mb-2'>{post.title}</h2>
          <p className='text-sm text-gray-700'>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
