import { FeaturesPageFstFrame } from '../components/featuresPageComponent/featuresPageFstFrame';
import { FeatureCardsFrame } from '../components/featuresPageComponent/featuresCardsFrame';
import { OneAppFrame } from '../components/commonFrames/OneAppFrame';
import { SupportSection } from '../components/commonFrames/SupportSection';

export const Features = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-[120px] py-4 w-full bg-white h-auto'>
      <FeaturesPageFstFrame />
      <FeatureCardsFrame />
      <OneAppFrame />
      <SupportSection />
    </div>
  );
};
