import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Splash from './Splash';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';

const Layout = ({ children, pageTitle }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay with setTimeout
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Clear the timeout to avoid memory leaks when the component unmounts
    return () => clearTimeout(timeout);
  }, [loading]);

  const handleHomeClick = () => {
    // Trigger the refresh or any action you want when the home link is clicked
    setLoading(true);
  };

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      {loading ? <Splash /> : <>
        <Navbar onHomeClick={handleHomeClick} />
        <main className='bg-coffee w-full flex flex-col items-center justify-center'>
          {children}
          <Footer />
        </main>
      </>}
    </div>
  );
};

export default Layout;