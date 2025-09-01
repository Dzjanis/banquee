import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { FrameCheck } from '../../commons/FrameCheck';
import { AppBtn } from '../../commons/AppBtn';

export const FrontPageFstFrame = () => {
  return (
    <div className='grid grid-cols-[3fr_2fr] w-3/4 bg-white'>
      <div className='flex flex-col justify-center items-start px-6'>
        <h2 className='font-semibold text-[100px]'>Banking starts here.</h2>
        <p className='text-[24px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
        <ul className='grid grid-cols-2 grid-rows-2 text-[18px] py-4'>
          <li className='flex justify-start items-center gap-4'>
            <FrameCheck />
            <p>Instant Transfer</p>
          </li>
          <li className='flex justify-start items-center gap-4'>
            <FrameCheck />
            <p>Payments Worldwide</p>
          </li>
          <li className='flex justify-start items-center gap-4'>
            <FrameCheck />
            <p>Saving account</p>
          </li>
          <li className='flex justify-start items-center gap-4'>
            <FrameCheck />
            <p>100% mobile banking</p>
          </li>
        </ul>
        <div className='flex justify-center items-center gap-4'>
          <Link to='/registerPage'>
            <AppBtn text='OpenAccaunt' />
          </Link>
          <Link to='/compare' className='text-emerald-300 cursor-pointer flex items-center gap-1'>
            Compare Cards <FiArrowRight />
          </Link>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <img src='../asets/cards.png' alt='Cards' className='h-full w-auto object-contain px-12'></img>
      </div>
    </div>
  );
};
