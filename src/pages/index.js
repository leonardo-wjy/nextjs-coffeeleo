import Layout from '../components/layout';
import '../styles/main.scss';
import { Container } from '../components/ui/containers';
import { useState, useEffect } from 'react';
import Splash from '../components/layout/splash';
import siteConfig from '../../site-config';

const Home = () => {
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
                <h1 className="text-4xl font-bold text-white">Welcome to Coffee Leo</h1>
            </div>
          </Container>
        </Layout>
      )}
    </div>
  );
};

export default Home;