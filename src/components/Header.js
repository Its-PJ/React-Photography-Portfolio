import React from 'react';

import Socials from './Socials';
import logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';

import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className="flex flex-col lg:flex-row
      lg:items-center w-full justify-between">
        <Link to={'/'} className="max-w-[350px]">
          <img src={logo} alt='' />

        </Link>
        <nav className='hidden xl:flex gap-x-12 font-bold'>
          <Link to={'/'} className='text-[#1f2fe0]
          hover:text-primary transition'>
            Home
            </Link>


            <Link to={'/about'} className='text-[#1f2fe0]
          hover:text-primary transition'>
            About
            </Link>

            <Link to={'/portfolio'} className='text-[#1f2fe0]
          hover:text-primary transition'>
            Portfolio
            </Link>


            <Link to={'/contact'} className='text-[#1f2fe0]
          hover:text-primary transition'>
            Contact
            </Link>
            
        </nav>
      </div>
      
      <Socials />
      <MobileNav />
    </header>
  ); 
};

export default Header;
