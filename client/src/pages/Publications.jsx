import { useState, useEffect } from 'react';
import { ListGroup, Form } from 'react-bootstrap';
import axios from 'axios';
import { motion } from 'framer-motion';

function Publications() {
  const [allPublications, setAllPublications] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5000/api/publications')
      .then(res => setAllPublications(res.data))
      .catch(err => console.error(err));
  }, []);

  const filtered = allPublications.filter((pub) =>
    pub.title.toLowerCase().includes(search.toLowerCase()) ||
    pub.authors.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-4 text-primary">Publications</h2>
      <Form.Control
        type="text"
        placeholder="Search by title or author"
        className="mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ListGroup>
        {filtered.map((pub) => (
          <ListGroup.Item key={pub.id}>
            <strong>{pub.title}</strong><br />
            <small>{pub.authors} – {pub.year}</small>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </motion.div>
  );
}

export default Publications;
