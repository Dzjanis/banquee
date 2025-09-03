import { FstFrame } from '../components/frontPageComponents/FstFrame';
import { ScnFrame } from '../components/frontPageComponents/ScnFrame';
import { OneAppFrame } from '../components/commonFrames/OneAppFrame';
import { SupportSection } from '../components/commonFrames/SupportSection';

export const FrontPage = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-[120px] py-4 w-full bg-white h-auto'>
      <FstFrame />
      <ScnFrame />
      <OneAppFrame />
      <SupportSection />
    </div>
  );
};
