import React, { useState } from 'react';
import logo from './images/logo.svg';
import menu from './images/menubar.svg';

function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='flex justify-between w-5/6 items-center text-xl mt-9 mx-auto'>
      <div>
        <img src={logo} alt='Logo' />
      </div>

      {/* Mobile Menu */}
      <div className='relative lg:hidden'>
        <button
          className='text-gray-500 hover:text-gray-700 focus:outline-none'
          onClick={toggleDropdown}
        >
          <img src={menu} alt='Menu' />
        </button>
        {isDropdownOpen && (
          <div className='mt-2 bg-white rounded-lg shadow-md absolute right-0'>
            {/* Dropdown menu items */}
            <h1 className='px-4 py-2 hover:bg-gray-100'>Features</h1>
            <h1 className='px-4 py-2 hover:bg-gray-100'>Pricing</h1>
            <h1 className='px-4 py-2 hover:bg-gray-100'>Resources</h1>
          </div>
        )}
      </div>

      {/* Desktop Menu */}
      <div className='hidden lg:flex gap-5 items-center'>
        <h1>Features</h1>
        <h1>Pricing</h1>
        <h1>Resources</h1>
      </div>

      <div className='hidden lg:flex gap-4'>
        <button>Login</button>
        <button className='text-[#ffffff] px-5 py-3 bg-grn rounded-xl'>Sign Up</button>
      </div>
    </div>
  );
}

export default Nav;
