import Layout from '../components/layout';
import '../styles/main.scss';
import { Container } from '../components/ui/containers';

export default function about() {
  return (
    <Layout>
        <Container className='flex justify-center items-center text-center h-[85vh]'>
            <div className="container mx-auto mt-8">
                <h2 className="text-3xl font-bold mb-4 text-white">Coffee Blog</h2>
                {/* Add your blog posts or content here */}
            </div>
        </Container>
    </Layout>
  );
}