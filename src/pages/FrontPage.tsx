import { FrontPageTitle } from '../components/frontPageComponents/FrontPageTitle';
import { ScnFrame } from '../components/frontPageComponents/ScnFrame';
import { OneAppFrame } from '../components/commonFrames/OneAppFrame';
import { PostSection } from '../components/frontPageComponents/PostSection';
import { FaqSection } from '../components/commonFrames/FaqSection';

export const FrontPage = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-[120px] py-4 w-full bg-white h-auto'>
      <FrontPageTitle />
      <ScnFrame />
      <PostSection />
      <OneAppFrame />
      <FaqSection />
    </div>
  );
};
