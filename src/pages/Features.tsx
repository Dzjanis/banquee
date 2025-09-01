import { FeaturesPageFstFrame } from '../components/featuresPageComponent/featuresPageFstFrame';
import { OneAppFrame } from '../components/commonFrames/OneAppFrame';
import { FeatureCardsFrame } from '../components/featuresPageComponent/featuresCardsFrame';

export const Features = () => {
  return (
    <div className='flex flex-col w-full justify-between items-center'>
      <FeaturesPageFstFrame />
      <FeatureCardsFrame />
      <OneAppFrame />
    </div>
  );
};
