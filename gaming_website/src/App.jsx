import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home'
import Games from './pages/Games/Games'
import Blog from './pages/Blog/Blog'
import Forums from './pages/Forums/Forums'
import Contact from './pages/Contact/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/games" style={styles.link}>Games</Link>
        <Link to="/blog" style={styles.link}>Blog</Link>
        <Link to="/forums" style={styles.link}>Forums</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

const styles = {
  navbar: {
    display: "flex",
    gap: "20px",
    padding: "10px",
    background: "#333",
    color: "white",
    justifyContent: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default App;
