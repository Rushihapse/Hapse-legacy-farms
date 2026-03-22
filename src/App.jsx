import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurStory from './pages/OurStory'; 
import OurLegacy from './pages/OurLegacy';
import OurHarvest from './pages/OurHarvest';
import Contact from './pages/Contact';
// 1. IMPORT the Consultancy page here:
import Consultancy from './pages/Consultancy'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-farm-sand font-sans text-gray-900 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} /> 
            <Route path="/our-legacy" element={<OurLegacy />} />
            <Route path="/our-harvest" element={<OurHarvest />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* 2. ADD THIS NEW ROUTE: */}
            <Route path="/consultancy" element={<Consultancy />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;