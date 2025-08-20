import { Link, NavLink } from 'react-router-dom';

export const HeaderNavigationMenu = () => {
  return (
    <div className='flex justify-between items-center w-2/3'>
      <Link to='/'>
        <img src='../../asets/banquee.png' alt='' />
      </Link>
      <nav className='flex justify-center items-center gap-4 w-auto font-custom'>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-700')}>
          FrontPage
        </NavLink>

        <NavLink to='/features' className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-700')}>
          Features
        </NavLink>

        <NavLink to='/compare' className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-700')}>
          Compare
        </NavLink>
      </nav>
      <div className='flex justify-center items-center gap-4'>
        <button className='text-emerald-300 cursor-pointer'>Login</button>
        <button className='flex w-auto h-auto bg-emerald-300 text-white cursor-pointer'>
          <span className='px-1 py-1'>Open Account</span>
        </button>
      </div>
    </div>
  );
};
