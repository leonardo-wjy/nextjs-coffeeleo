import React from 'react';
import Layout from '../components/Layout';
import { Container } from '../ui/containers';

const About = () => {
  return (
    <Layout pageTitle="About Page">
      {/* Your About page content */}
      <Container className='flex justify-center items-center text-center h-[85vh]'>
        <div className="container mx-auto mt-8">
          <h2 className="text-3xl font-bold mb-4 text-blue-400">About</h2>
          <p className='text-blue-400'>
            Coffee Leo is not just a coffee shop; it's a community of coffee lovers brought together by their passion for exquisite coffee. Our journey began with a simple idea - to create a space where people could connect, relax, and savor the finest coffee blends.

            At Coffee Leo, we source our coffee beans from the best regions, ensuring a rich and diverse flavor experience. Our skilled baristas are dedicated to the art of coffee-making, crafting each cup with precision and care. From the moment you step into our coffee haven, you'll feel the warmth of our community and the aroma of freshly brewed coffee.

            Join us in celebrating the love for coffee. Whether you're a connoisseur or a curious beginner, there's a place for you at Coffee Leo.
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default About;