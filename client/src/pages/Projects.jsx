import { Card, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const projectList = [
  {
    title: 'Green Concrete Innovation',
    desc: 'Eco-friendly concrete using recycled materials to reduce carbon footprint.',
  },
  {
    title: 'Solar-Powered Desalination',
    desc: 'A low-cost solar desalination system for rural water access.',
  },
  {
    title: 'Smart Irrigation Monitoring',
    desc: 'IoT-based water usage optimization system for agriculture.',
  },
];

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-4 text-primary">Our Projects</h2>
      <Row className="g-4">
        {projectList.map((proj, idx) => (
          <Col md={6} key={idx}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default Projects;
