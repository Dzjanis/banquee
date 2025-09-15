import { SupportSection } from '../components/commonFrames/SupportSection';
import { CardsCompareFrame } from '../components/compareComponents/CardsCompareFrame';
import { CompareTable } from '../components/compareComponents/CompareTable';
import { ComparePageTitle } from '../components/compareComponents/ComparePageTitle';

export const ComparePage = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-[120px] py-4 w-full bg-white h-auto'>
      <ComparePageTitle />
      <CardsCompareFrame />
      <CompareTable />
      <SupportSection />
    </div>
  );
};
