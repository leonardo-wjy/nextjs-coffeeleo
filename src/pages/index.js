import React from 'react';
import Layout from '../components/Layout';
import { Container } from '../ui/containers';

const Home = () => {
  return (
    <Layout pageTitle="Home Page">
      <Container className='flex justify-center items-center text-center h-[85vh]'>
        <div className="container mx-auto mt-8">
          <h1 className="text-4xl font-bold text-blue-500">Welcome to Coffee Leo</h1>

          {/* Coffee Content */}
          <div className="mt-4">
            <p className="text-lg text-blue-400">
              At Coffee Leo, we are passionate about providing you with the finest coffee experience.
              From carefully selected beans to expertly crafted brews, we take pride in every cup.
            </p>
          </div>

          {/* Additional Coffee Features */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-blue-500">Explore Our Coffee Features</h2>
            <ul className="list-disc list-inside text-blue-400">
              <li>Single-origin beans for rich flavor profiles</li>
              <li>Specialty blends crafted by our skilled baristas</li>
              <li>Cozy ambiance for a relaxing coffee time</li>
              <li>Regular events and promotions for our valued customers</li>
            </ul>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;