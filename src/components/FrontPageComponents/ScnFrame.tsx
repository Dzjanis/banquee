import { ScnFrameCards } from './ScnFrameCards';

export const ScnFrame = () => {
  return (
    <div className='grid grid-cols-[3fr_2fr] w-3/4 bg-white'>
      <div className='flex flex-col justify-center items-start px-6'>
        <h3 className='text-xl font-semibold text-[100px]'>One app. One banking.</h3>
        <ScnFrameCards />
      </div>
      <div className='flex items-center justify-center'>
        <img src='../asets/app.png' alt='Cards' className='h-full w-auto object-contain px-12'></img>
      </div>
    </div>
  );
};
