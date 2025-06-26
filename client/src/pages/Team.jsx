import { Card, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet'; // use -async version

const team = [
  { name: 'Dr. Amina B.', role: 'Lab Director', img: 'https://via.placeholder.com/150' },
  { name: 'Samir D.', role: 'Researcher', img: 'https://via.placeholder.com/150' },
  { name: 'Layla K.', role: 'Project Coordinator', img: 'https://via.placeholder.com/150' },
];

function Team() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Our Team | Engineering Lab</title>
        <meta name="description" content="Meet the dedicated team members of our engineering and sustainability lab." />
        <link rel="canonical" href="https://your-lab-site.com/team" />
      </Helmet>

      <h2 className="mb-4 text-primary">Our Team</h2>
      <Row className="g-4">
        {team.map((member, idx) => (
          <Col md={4} key={idx}>
            <Card className="text-center shadow-sm h-100" vocab="http://schema.org/" typeof="Person">
              <Card.Img variant="top" src={member.img} alt={member.name} property="image" />
              <Card.Body>
                <Card.Title property="name">{member.name}</Card.Title>
                <Card.Text>
                  <span property="jobTitle">{member.role}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default Team;
