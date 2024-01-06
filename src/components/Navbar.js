import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/containers';

const Navbar = ({ onHomeClick }) => {
  return (
    <nav className='py-4 border-b-2'>
      <Container className='flex justify-between items-center'>
        <div className='flex items-center'>
          <div>
            <Link href='/' onClick={onHomeClick} className='text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl'>
              Leo
            </Link>
          </div>
        </div>
        <div className='flex'>
          <div>
            <Link href='/' onClick={onHomeClick} className='px-4 py-2 text-sm font-medium hover:font-bold'>
              Home
            </Link>
          </div>
          <div>
            <Link href='/blog' onClick={onHomeClick} className='px-4 py-2 text-sm font-medium hover:font-bold'>
              Blog
            </Link>
          </div>
          <div>
            <Link href='/about' onClick={onHomeClick} className='px-4 py-2 text-sm font-medium hover:font-bold'>
              About
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;