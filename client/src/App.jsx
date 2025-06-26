import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

import AnimatedNavbar from './components/AnimatedNavbar';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Publications from './pages/Publications';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <AnimatedNavbar />

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/projects" element={<AnimatedPage><Projects /></AnimatedPage>} />
          <Route path="/team" element={<AnimatedPage><Team /></AnimatedPage>} />
          <Route path="/publications" element={<AnimatedPage><Publications /></AnimatedPage>} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

// Animation wrapper for pages
const AnimatedPage = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

export default App;
