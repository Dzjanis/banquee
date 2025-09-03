import { FeaturesPageFstFrame } from '../components/featuresPageComponent/featuresPageFstFrame';
import { FeatureCardsFrame } from '../components/featuresPageComponent/featuresCardsFrame';
import { OneAppFrame } from '../components/commonFrames/OneAppFrame';

export const Features = () => {
  return (
    <div className='flex flex-col w-full justify-between items-center'>
      <FeaturesPageFstFrame />
      <FeatureCardsFrame />
      <OneAppFrame />
    </div>
  );
};
