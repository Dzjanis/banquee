type AppBtnProps = {
  text: string;
  typeVal?: 'button' | 'submit';
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
};

export const AppBtn: React.FC<AppBtnProps> = ({
  text,
  typeVal = 'button',
  isLoading = false,
  disabled = false,
  className = '',
}) => {
  return (
    <button
      type={typeVal}
      disabled={disabled || isLoading}
      className={`flex items-center justify-center w-full h-auto bg-emerald-500 text-white cursor-pointer rounded-md transition hover:bg-emerald-600 disabled:opacity-50 ${className}`}>
      <span className='px-4 py-2'>{isLoading ? 'Signing in...' : text}</span>
    </button>
  );
};
