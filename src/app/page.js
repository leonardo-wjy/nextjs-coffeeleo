import { Container } from '../components/ui/containers';

const Home = () => {
  return (
    <Container className='flex justify-center items-center text-center h-screen'>
      <div className="bg-cover flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Welcome to Coffee Leo</h1>
      </div>
    </Container>
  );
};

export default Home;