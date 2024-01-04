import Layout from '../components/layout';
import '../styles/main.scss';
import { Container } from '../components/ui/containers';
import { useState, useEffect } from 'react';
import Splash from '../components/layout/splash';

const blog = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay with setTimeout
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout duration as needed (in milliseconds)

    // Clear the timeout to avoid memory leaks when the component unmounts
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      {loading ? (
        // Display the splash screen while loading is true
        <Splash />
      ) : (
        // Render your actual content when loading is false
        <Layout>
          <Container className='flex justify-center items-center text-center h-[85vh]'>
            <div className="container mx-auto mt-8">
              <h2 className="text-3xl font-bold mb-4 text-white">Blog</h2>
              <p className='text-white'>
              </p>
            </div>
          </Container>
        </Layout>
      )}
    </div>
  );
};

export default blog;