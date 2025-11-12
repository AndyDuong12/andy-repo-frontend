import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './style.css';

import Home from './pages/Home.js';
import List from './pages/List.js';
import Population from './pages/Population.js';
import Area from './pages/Area.js';

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/population">Population</Link>
          </li>
          <li>
            <Link to="/area">Area</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/home" element={<Home title="Home page" />} />
        <Route path="/list" element={<List />} />
        <Route path="/population" element={<Population />} />
        <Route path="/area" element={<Area />} />
      </Routes>
    </Router>
  );
}
