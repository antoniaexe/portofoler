import { Header } from './Header';
import { Footer } from './Footer';
import { Main } from './Main';

export const Layout = ({children}:any) =>{ 
  return (
    <main>
      <Header></Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </main>
  );
};