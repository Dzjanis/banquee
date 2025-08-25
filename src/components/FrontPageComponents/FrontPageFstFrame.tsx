import { FstFrameCheck } from './FstFrameCheck';

export const FrontPageFstFrame = () => {
  return (
    <div className='grid grid-cols-[2fr_1fr] w-2/3 bg-white'>
      <div className='flex flex-col justify-center items-start px-6'>
        <h3 className='text-xl font-semibold text-[100px]'>Baking starts here.</h3>
        <p className='text-[24px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
        <ul className='grid grid-cols-2 grid-rows-2 text-[18px] py-4'>
          <li className='flex justify-start items-center gap-4'>
            <FstFrameCheck />
            <p>Instant Transfer</p>
          </li>
        </ul>
      </div>
      <div className='flex items-center justify-center'>
        <img src='../asets/cards.png' alt='Cards' className='h-full w-auto object-contain px-12'></img>
      </div>
    </div>
  );
};
