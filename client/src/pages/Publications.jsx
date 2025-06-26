import { ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';

const publications = [
  {
    title: 'Sustainable Materials in Civil Engineering',
    authors: 'A. B. Zaki, S. Djouadi',
    year: 2024,
  },
  {
    title: 'AI-Driven Waste Management Models',
    authors: 'R. Ali, N. Tarek',
    year: 2023,
  },
  {
    title: 'Energy Efficiency in Smart Cities',
    authors: 'M. Karim, A. Bouteldja',
    year: 2022,
  },
];

function Publications() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-4 text-primary">Publications</h2>
      <ListGroup>
        {publications.map((pub, idx) => (
          <ListGroup.Item key={idx}>
            <strong>{pub.title}</strong> <br />
            <small>{pub.authors} – {pub.year}</small>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </motion.div>
  );
}

export default Publications;
