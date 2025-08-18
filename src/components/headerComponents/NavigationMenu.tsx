import { Link, NavLink } from 'react-router-dom';

export const NavigationMenu = () => {
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
      <button>ThemeToggle</button>
    </div>
  );
};
