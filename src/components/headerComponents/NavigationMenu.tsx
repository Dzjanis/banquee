import { NavLink } from 'react-router-dom';

export const NavigationMenu = () => {
  return (
    <nav className='flex justify-center items-center gap-4 w-auto'>
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
  );
};
