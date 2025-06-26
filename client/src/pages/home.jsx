import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div>
      <h1 className="mb-4 text-primary">Welcome to the Engineering Lab</h1>

      <Card className="shadow-sm mb-3">
        <Card.Body>
          <Card.Title>Our Mission</Card.Title>
          <Card.Text>
            We drive innovation in engineering and sustainability through cutting-edge research, education, and outreach.
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>

      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>Latest Project</Card.Title>
          <Card.Text>
            Discover our recent work on eco-efficient materials and green energy solutions.
          </Card.Text>
          <Button variant="outline-primary">View Projects</Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default Home;
