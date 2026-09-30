import Navbar from './components/Navbar';
import Services from './components/Services';
import About from './components/About';
import Training from './components/Training';
import Projects from './components/Projects';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />

      <main>
        <Services />
        <About />
        <Training />
        <Projects />
        <Careers />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
