import { FaqNavigation } from './FaqNavigation';
import { FaqSection } from './FaqSection';

export const SupportFaqSection = () => {
  return (
    <div className='grid grid-cols-[1fr_3fr] w-3/4 gap-4'>
      <FaqNavigation />
      <FaqSection />
    </div>
  );
};
