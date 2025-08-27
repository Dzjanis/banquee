import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { FstFrameCheck } from './FstFrameCheck';
import { AppBtn } from '../../commons/AppBtn';

export const FrontPageFstFrame = () => {
  return (
    <div className='grid grid-cols-[3fr_2fr] w-3/4 bg-white'>
      <div className='flex flex-col justify-center items-start px-6'>
        <h3 className='text-xl font-semibold text-[100px]'>Banking starts here.</h3>
        <p className='text-[24px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
        <ul className='grid grid-cols-2 grid-rows-2 text-[18px] py-4'>
          <li className='flex justify-start items-center gap-4'>
            <FstFrameCheck />
            <p>Instant Transfer</p>
          </li>
          <li className='flex justify-start items-center gap-4'>
            <FstFrameCheck />
            <p>Payments Worldwide</p>
          </li>
          <li className='flex justify-start items-center gap-4'>
            <FstFrameCheck />
            <p>Saving account</p>
          </li>
          <li className='flex justify-start items-center gap-4'>
            <FstFrameCheck />
            <p>100% mobile banking</p>
          </li>
        </ul>
        <div className='flex justify-center items-center gap-4'>
          <AppBtn text='OpenAccaunt' />
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
