import GrainOverlay from './components/GrainOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Expertise from './components/Expertise';
import Training from './components/Training';
import Projects from './components/Projects';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();
  return (
    <>
      <GrainOverlay />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Expertise />
        <Training />
        <Projects />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
