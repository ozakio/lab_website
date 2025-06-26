import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './navbar.css'; // 👈 Add this for custom styling

const AnimatedNavbar = () => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Navbar bg="primary" variant="dark" expand="lg" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/">🌱 EngLab</Navbar.Brand>
          <Navbar.Toggle aria-controls="lab-navbar" />
          <Navbar.Collapse id="lab-navbar">
            <Nav className="ms-auto nav-pill-container">
              <FancyNavLink to="/" label="Home" />
              <FancyNavLink to="/projects" label="Projects" />
              <FancyNavLink to="/team" label="Team" />
              <FancyNavLink to="/publications" label="Publications" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

const FancyNavLink = ({ to, label }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="nav-pill"
  >
    <Nav.Link as={Link} to={to} className="nav-pill-link">
      {label}
    </Nav.Link>
  </motion.div>
);

export default AnimatedNavbar;
