import Footer from './footer';

const Main = ({ children }) => {
  return (
    <main className='bg-coffee w-full flex flex-col items-center justify-center'>
      {children}
      <Footer />
    </main>
  );
};

export default Main;
