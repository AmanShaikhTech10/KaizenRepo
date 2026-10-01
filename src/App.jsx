import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// We will create these components next
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page Imports
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import Pricing from './pages/Pricing/Pricing';
import Career from './pages/Career/Career';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      {/* Navbar sits outside Routes so it persists across page changes */}
      <Navbar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer also persists */}
      <Footer />
    </Router>
  );
}

export default App;