import { Link, NavLink } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const [togglerNav, setTogglerNav] = useState(false);

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  return (
    <nav className=' h-auto md:h-24 p-2 bg-blue-200 max-w-6xl mx-auto flex justify-between md:items-center'>
      <Link to='/'>
        <FcHome className=' text-6xl' />
      </Link>
      <div
        className={
          togglerNav ? 'flex flex-col gap-4 md:inline' : 'hidden md:inline'
        }
      >
        <NavLink className='nav-link' onClick={clickHandler} to='/'>
          Home
        </NavLink>
        <NavLink className='nav-link' onClick={clickHandler} to='/about'>
          About
        </NavLink>
        <NavLink className='nav-link' onClick={clickHandler} to='/contact'>
          Contact
        </NavLink>
      </div>
      <button
        className=' inline md:hidden self-start nav-link'
        onClick={clickHandler}
      >
        {togglerNav ? <AiOutlineClose /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;
