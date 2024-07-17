// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import HeroList from './HeroList';
import HeroDetail from './HeroDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Tour of Heroes</h1>
          <nav>
            <Link to="/">Dashboard</Link> | <Link to="/heroes">Heroes</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/heroes" element={<HeroList />} />
          <Route path="/heroes/:id" element={<HeroDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
