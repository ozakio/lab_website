import { Card, Row, Col } from 'react-bootstrap';

const team = [
  { name: 'Dr. Amina B.', role: 'Lab Director', img: 'https://via.placeholder.com/150' },
  { name: 'Samir D.', role: 'Researcher', img: 'https://via.placeholder.com/150' },
];

function Team() {
  return (
    <>
      <h2 className="mb-4 text-primary">Our Team</h2>
      <Row className="g-4">
        {team.map((member, idx) => (
          <Col md={4} key={idx}>
            <Card className="text-center shadow-sm h-100">
              <Card.Img variant="top" src={member.img} alt={member.name} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Team;
