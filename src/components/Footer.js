import Link from 'next/link';
import { Container } from '../ui/containers';

const Footer = () => {
  return (
    <footer className='py-2'>
      <Container className='flex justify-center items-center text-sm font-medium text-blue-400'>
        © {new Date().getFullYear()}&nbsp;
        <Link href={'/'} target='_blank' rel='noopener noreferrer'>
          
            Leonardo Wijaya
          
        </Link>
        . All Rights Reserved.
      </Container>
    </footer>
  );
};

export default Footer;
