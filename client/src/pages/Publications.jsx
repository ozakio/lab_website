import { useState, useEffect } from 'react';
import { ListGroup, Form } from 'react-bootstrap';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet'; // <-- use helmet-async instead of helmet

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
      <Helmet>
        <title>Publications | Lab Name</title>
        <meta name="description" content="Scientific publications from our research team." />
        <link rel="canonical" href="https://your-lab-site.com/publications" />
      </Helmet>

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
            <div vocab="http://schema.org/" typeof="ScholarlyArticle">
              <span property="name"><strong>{pub.title}</strong></span><br />
              <span property="author">{pub.authors}</span><br />
              <span property="datePublished">{pub.year}</span>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </motion.div>
  );
}

export default Publications;
