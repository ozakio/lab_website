import { Card, Row, Col } from 'react-bootstrap';

const projectList = [
  {
    title: 'Green Concrete Innovation',
    desc: 'Eco-friendly concrete using recycled materials to reduce carbon footprint.',
  },
  {
    title: 'Solar-Powered Desalination',
    desc: 'A low-cost solar desalination system for rural water access.',
  },
];

function Projects() {
  return (
    <>
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
    </>
  );
}

export default Projects;
