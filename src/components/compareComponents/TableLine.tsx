import { FaFileAlt, FaUndoAlt, FaWifi, FaAt } from 'react-icons/fa';

const iconMap = {
  file: FaFileAlt,
  undo: FaUndoAlt,
  wifi: FaWifi,
  at: FaAt,
};

type TableLineProps = {
  title: string;
  icon: keyof typeof iconMap;
  text: string;
  value: string[];
};

export const TableLine = ({ title, icon, text, value }: TableLineProps) => {
  const IconComponent = iconMap[icon];

  return (
    <div className='grid grid-cols-4 w-3/4 h-auto'>
      <div className='flex justify-start items-center'>
        {IconComponent && <IconComponent className='text-green-500 text-xl' />}
      </div>
    </div>
  );
};
