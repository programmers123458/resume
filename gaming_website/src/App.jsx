import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Gaming from "./pages/Gaming/Gaming";
import Blog from "./pages/Blog/Blog"
import Forums from './pages/Forums/Forums'
import Contact from "./pages/Contact/Contact"
// import
import "./App.css";

function App() {
  return (
    <Router>
      <nav style={styles.navbar}>
        <header>
          <div class="flex">
            <nav>
              <button id="nav-toggle" class="hamburger-menu">
                <span class="strip"></span>
                <span class="strip"></span>
                <span class="strip"></span>
              </button>
              <ul id="nav-menu-container">
                <li>
                  <a>
                    <Link to="/">Home</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to="/gaming">Gaming</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to="/blog">Blog</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to="/forums">Forums</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to="/contact">Contact</Link>
                  </a>
                </li>
              </ul>
            </nav>

            <Link to="/login" id="login-register-button" style={styles.link}>
              Login
            </Link>
          </div>
        </header>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

const styles = {};

export default App;
