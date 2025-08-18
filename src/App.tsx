import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Employer from './pages/Employer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#293748] text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/employer" element={<Employer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;