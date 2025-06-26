// client/src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Publications from './pages/Publications';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Engineering & Sustainable Development Lab</h1>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/projects" style={{ marginRight: '1rem' }}>Projects</Link>
        <Link to="/team" style={{ marginRight: '1rem' }}>Team</Link>
        <Link to="/publications">Publications</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </div>
  );
}

export default App;
