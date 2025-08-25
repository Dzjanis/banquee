import { FrontPageFstFrame } from '../components/FrontPageComponents/FrontPageFstFrame';
import { FrontPageScnFrame } from '../components/FrontPageComponents/FrontPageScnFrame';

export const FrontPage = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-[120px] py-4 w-full bg-white h-auto'>
      <FrontPageFstFrame />
      <FrontPageScnFrame />
    </div>
  );
};
