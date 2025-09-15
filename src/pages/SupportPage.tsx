import { SupportSection } from '../components/commonFrames/SupportSection';
import { SupportPageTitle } from '../components/supportComponents/supportPageTitle';

export const SupportPage = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-[120px] py-4 w-full bg-white h-auto'>
      <SupportPageTitle />
      <SupportSection />
      <div className='flex flex-col justify-between items-center gap-[120px] py-4 w-full bg-white h-auto'>
        SUPPORT PAGE
      </div>
    </div>
  );
};
