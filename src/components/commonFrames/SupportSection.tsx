import { FaPhone } from 'react-icons/fa6';
import { IoMailUnreadOutline } from 'react-icons/io5';

export const SupportSection = () => {
  return (
    <div className='flex justify-between items-center text-white bg-emerald-200 rounded-xl w-2/3 p-10 gap-4 my-6'>
      <div className='flex flex-col justify-start items-stretch'>
        <h2 className='text-3xl font-bold '>Still have a questions?</h2>
        <p className='text'>We are here to help.</p>
      </div>
      <div className='flex justify-between items-center gap-4'>
        <div className='w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-emerald-400 text-xl'>
          <FaPhone />
        </div>
        <div className='flex flex-col justify-start items-start'>
          <a href='tel: +49 116 123 456' className=''>
            +49 116 123 456
          </a>
          <p>Support Hotline</p>
        </div>
      </div>
      <div className='flex justify-between items-center gap-4'>
        <div className='w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-emerald-400 text-xl'>
          <IoMailUnreadOutline />
        </div>
        <div className='flex flex-col justify-start items-start'>
          <a href='mailto: help@banquee.com' className=''>
            help@banquee.com
          </a>
          <p>Support Email</p>
        </div>
      </div>
      <button type='button' className='flex bg-black  rounded-md py-4 px-10 text-white cursor-pointer hover:underline'>
        Chat with us
      </button>
    </div>
  );
};
