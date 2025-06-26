import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <Container className="text-center">
        <p>© 2025 Engineering & Sustainable Development Lab</p>
        <p>
          📧 <a href="mailto:contact@englab.edu" className="text-light">contact@englab.edu</a> |
          🌐 <a href="https://englab.edu" className="text-light">Website</a>
        </p>
        <p>
          🔗 <a href="#" className="text-light mx-2">Facebook</a>
          🔗 <a href="#" className="text-light mx-2">LinkedIn</a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
