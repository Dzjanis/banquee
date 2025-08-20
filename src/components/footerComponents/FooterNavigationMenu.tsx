import { Link, NavLink } from 'react-router-dom';

export const FooterNavigationMenu = () => {
  return (
    <>
      <nav className='w-[1400px] h-[300px] p-4 grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4'>
        <Link to='/'>
          <img src='../../asets/banquee.png' alt='' />
        </Link>
        <div className='bg-green-200'>1fr</div>
        <div className='bg-green-200'>1fr</div>
        <div className='bg-green-200'>1fr</div>
        <div className='bg-green-200'>1fr</div>
      </nav>
      <div></div>;
    </>
  );
};
