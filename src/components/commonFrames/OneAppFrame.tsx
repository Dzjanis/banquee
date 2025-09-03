// import { Link } from 'react-router-dom';
import { FrameCheck } from '../../commons/FrameCheck';
import oneAppImg from '../../assets/oneAppImg.png';
import AppStoreImg from '../../assets/AppStoreImg.png';
import GoogleStoreImg from '../../assets/GoogleStoreImg.png';

export const OneAppFrame = () => {
  return (
    <div className='grid grid-cols-[3fr_2fr] w-3/4 bg-emerald-200 rounded-2xl text-white'>
      <div className='flex flex-col justify-center items-start px-6 py-20 gap-4'>
        <h3 className='font-semibold text-[80px]'>
          One app. <br />
          One banking.
        </h3>
        <p className='text-[24px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna.
        </p>
        <ul className='grid grid-cols-2 grid-rows-2 text-[18px] py-4 gap-4'>
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
          <a href='https://Apple.com' target='_blank' rel='noopener noreferrer'>
            <img src={AppStoreImg} alt='AppStore' />
          </a>
          <a href='https://Play.google.com' target='_blank' rel='noopener noreferrer'>
            <img src={GoogleStoreImg} alt='PlayMarket' />
          </a>
        </div>
      </div>
      <div className='flex justify-center items-end'>
        <img src={oneAppImg} alt='Cards' className='h-3/4 w-auto object-contain'></img>
      </div>
    </div>
  );
};
