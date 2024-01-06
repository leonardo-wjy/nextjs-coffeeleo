import React from 'react';
import Layout from '../components/Layout';
import { Container } from '../ui/containers';

const Blog = () => {
  return (
    <Layout pageTitle="Blog Page">
      {/* Your Blog page content */}
      <Container className='flex justify-center items-center text-center h-[85vh]'>
        <div className="container mx-auto mt-8">
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Blog</h2>
          <p className='text-blue-400'>
            Welcome to our blog! Here, we share our insights, thoughts, and updates on everything related to coffee culture.
            Explore our articles to discover the latest trends, brewing techniques, and exciting coffee stories.
            Whether you're a coffee enthusiast or a casual drinker, there's something for everyone in our blog.
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default Blog;