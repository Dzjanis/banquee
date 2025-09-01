import { FrontPageFstFrame } from '../components/frontPageComponents/FstFrame';
import { FrontPageScnFrame } from '../components/frontPageComponents/ScnFrame';
import { OneAppFrame } from '../components/commonFrames/OneAppFrame';

export const FrontPage = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-[120px] py-4 w-full bg-white h-auto'>
      <FrontPageFstFrame />
      <FrontPageScnFrame />
      <OneAppFrame />
    </div>
  );
};
