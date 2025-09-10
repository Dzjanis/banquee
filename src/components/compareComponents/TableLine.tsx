import { FrameCheck } from '../../commons/FrameCheck';
import { IconRenderer } from './iconRenderer';
import { iconMap } from '../../data/iconMap';

type TableLineProps = {
  title: string;
  icon: keyof typeof iconMap;
  text: string;
  value: string[];
};

export const TableLine = ({ title, icon, text, value }: TableLineProps) => {
  return (
    <div className='grid grid-cols-[1fr_1fr_1fr_1fr] w-full h-auto'>
      <div className='grid grid-cols-[1fr_auto] gap-2'>
        <IconRenderer iconKey={icon} />
        <div className='flex flex-col justify-center items-start text-sm'>
          <h4 className='font-bold'>{title}</h4>
          <p className='whitespace-normal'>{text}</p>
        </div>
      </div>
      {value.map((item, index) => {
        return (
          <div key={index} className='flex w-full justify-center items-center'>
            {item === 'check' ? <FrameCheck /> : item}
          </div>
        );
      })}
    </div>
  );
};
