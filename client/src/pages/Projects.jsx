import { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
          
        <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Publications | Lab Name</title>
        <meta name="description" content="Scientific publications from our research team." />
        <link rel="canonical" href="https://your-lab-site.com/publications" />
      </Helmet> 
      <h2 className="mb-4 text-primary">Our Projects</h2>
      <Row className="g-4">
        {projects.map((proj) => (
          <Col md={6} key={proj.id}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default Projects;
