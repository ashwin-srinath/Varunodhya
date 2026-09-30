import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
        {/* PAGE 1 — HERO */}
        <Hero />

        {/* PAGE 2 — WHAT WE DO */}
        <Services />

        {/* PAGE 3 — ABOUT */}
        <About />

        {/* PAGE 4 — TRAINING */}
        <Training />

        {/* PAGE 5 — PROJECTS */}
        <Projects />

        {/* PAGE 6 — CAREERS */}
        <Careers />

        {/* PAGE 7 — CONTACT */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
