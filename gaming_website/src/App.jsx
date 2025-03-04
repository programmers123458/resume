import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Games from "./pages/Games/Games";
import Blog from "./pages/Blog/Blog";
import Forums from "./pages/Forums/Forums";
import Contact from "./pages/Contact/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <nav style={styles.navbar}>
        <ul style={styles.navbar}>
          <Link to="/" style={styles.link} className="link">
            Home
          </Link>
          <Link to="/games" style={styles.link} className="link">
            Games
          </Link>
          <Link to="/blog" style={styles.link} className="link">
            Blog
          </Link>
          <Link to="/forums" style={styles.link} className="link">
            Forums
          </Link>
          <Link to="/contact" style={styles.link} className="link">
            Contact
          </Link>
        </ul>
        <form style={styles.form}>
          <button className="header-btn">Login</button>
        </form>
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
    background: "rgb(81, 2, 81)",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    "padding-top": "10px",
    "padding-bottom": "10px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "20px",
  },
  form: {
    marginTop: "2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

};

export default App;
