// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Update imports
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes> {/* Update to use Routes */}
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/*" element={<Navigate to="/about" />} /> {/* Use Navigate for default route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
