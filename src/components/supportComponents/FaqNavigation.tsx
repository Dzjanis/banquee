export const FaqNavigation = () => {
  return (
    <div className='flex flex-col justify-start items-start w-3/4 h-56 p-4 bg-gray-200'>
      <h5 className='text-black font-bold mb-4'>Categories</h5>
      <a href='#Cards' className='text-gray-500 cursor-pointer py-2'>
        Cards
      </a>
      <a href='#Account' className='text-gray-500 cursor-pointer py-2'>
        Account
      </a>
      <a href='#Personal Details' className='text-gray-500 cursor-pointer py-2'>
        Personal Details
      </a>
    </div>
  );
};
