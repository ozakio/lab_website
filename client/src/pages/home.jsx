import { Card, Button, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
            <Helmet>
        <title>Engineering & Sustainable Development Lab</title>
        <meta name="description" content="Research in green tech, sustainability, and smart cities." />
        <meta property="og:title" content="Engineering Lab" />
        <meta property="og:description" content="Explore research projects, publications, and the team behind innovation." />
      </Helmet>
      <h1 className="mb-4 text-primary">Welcome to the Engineering Lab</h1>

      <Row className="g-4">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>🔬 Our Mission</Card.Title>
              <Card.Text>
                We explore engineering innovations and sustainable development practices to shape a better future.
              </Card.Text>
              <Button variant="primary">Discover Our Work</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>📢 Latest News</Card.Title>
              <Card.Text>
                Our recent research focuses on renewable materials and environmental impact reduction.
              </Card.Text>
              <Button variant="outline-primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </motion.div>
  );
}

export default Home;
