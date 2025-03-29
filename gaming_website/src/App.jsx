import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Games from "./pages/Games/Games";
import Blog from "./pages/Blog/Blog";
import Forums from "./pages/Forums/Forums";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <nav style={styles.navbar}>
        <ul style={styles.navbar}>
          <Link to="/" style={styles.link} className="link">
            Home
          </Link>
          <Link to="/community" style={styles.link} className="link">
            Community
          </Link>
          <Link to="/about" style={styles.link} className="link">
            About
          </Link>
          <Link to="/support" style={styles.link} className="link">
            Support
          </Link>
          <Link to="/contact" style={styles.link} className="link">
            Contact
          </Link>
        </ul>
        <form style={styles.form}>
          <button className="header-btn">
            <Link to="/login" style={styles.link}>
              Login
            </Link>
          </button>
        </form>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Games />} />
        <Route path="/about" element={<Blog />} />
        <Route path="/support" element={<Forums />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

const styles = {
  navbar: {
    display: "flex",
    gap: "20px",
    padding: "10px",
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
    alignItems: "center",
  },
};

export default App;
