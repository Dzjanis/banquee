import { FeaturesTitle } from '../components/featuresPageComponent/featuresTitle';
import { FeatureCardsFrame } from '../components/featuresPageComponent/featuresCardsFrame';
import { OneAppFrame } from '../components/commonFrames/OneAppFrame';
import { FaqSection } from '../components/commonFrames/FaqSection';

export const Features = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-[120px] py-4 w-full bg-white h-auto'>
      <FeaturesTitle />
      <FeatureCardsFrame />
      <OneAppFrame />
      <FaqSection />
    </div>
  );
};
