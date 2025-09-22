// IconRenderer.tsx
import { iconMap } from '../../data/iconMap';

type IconRendererProps = {
  iconKey: keyof typeof iconMap;
  color?: string;
};

export const IconRenderer: React.FC<IconRendererProps> = ({ iconKey, color = 'currentColor' }) => {
  const Icon = iconMap[iconKey];

  if (!Icon) return null;

  return (
    <div
      className='
        flex items-center justify-center rounded-full bg-gray-200
        w-12 h-12 text-xl
        sm:w-10 sm:h-10 sm:text-lg
        md:w-8 md:h-8 md:text-base
        lg:w-12 lg:h-12 lg:text-xl
        text-emerald-400
      '>
      <Icon color={color} />
    </div>
  );
};
