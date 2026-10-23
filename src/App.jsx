import Header from './components/layout/Header';
import Hero from './components/sections/hero/Hero';
import Portfolio from './components/sections/portfolio/Portfolio';
import Marquee from './components/sections/marquee/Marquee';
import Energy from './components/sections/energy/Energy';
import Catalog from './components/sections/catalog/Catalog';
import Professional from './components/sections/professional/Professional';
import Enquiry from './components/sections/enquiry/Enquiry';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Portfolio />
        <Marquee />
        <Energy />
        <Catalog />
        <Professional />
        <Enquiry />
      </main>
      <Footer />
    </>
  );
}