import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="portfolio-app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
