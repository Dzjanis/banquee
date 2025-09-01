import { FrameCheck } from '../../commons/FrameCheck';

type FeatureCardListProps = {
  items: string[];
};
export const FeatureCardList = ({ items }: FeatureCardListProps) => {
  return (
    <ul className='flex flex-col justify-between items-start gap-4'>
      {items.map((item, i) => (
        <li key={i} className='flex justify-start items-center gap-4'>
          <FrameCheck />
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
};
