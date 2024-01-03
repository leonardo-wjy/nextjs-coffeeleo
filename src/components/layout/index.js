import Main from './main';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
