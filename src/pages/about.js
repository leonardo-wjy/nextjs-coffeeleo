import Layout from '../components/layout';
import '../styles/main.scss';
import { Container } from '../components/ui/containers';

export default function about() {
  return (
    <Layout>
        <Container className='flex justify-center items-center text-center h-[85vh]'>
            <div className="container mx-auto mt-8">
                <h2 className="text-3xl font-bold mb-4 text-white">About Coffee Leo</h2>
                <p className='text-white'>
                    Coffee Leo is your go-to destination for everything related to coffee.
                    Learn about different coffee varieties, brewing methods, and explore the rich world of coffee culture.
                </p>
            </div>
        </Container>
    </Layout>
  );
}
