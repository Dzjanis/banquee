import { OneAppFrame } from '../components/commonFrames/OneAppFrame';
import { SupportSection } from '../components/commonFrames/SupportSection';

export const Compare = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-[120px] py-4 w-full bg-white h-auto'>
      <OneAppFrame />
      <SupportSection />
    </div>
  );
};
