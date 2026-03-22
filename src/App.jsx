import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import OurStory from "./pages/ourstory";      // Fixed: changed to lowercase
import OurLegacy from './pages/ourLegacy';    // Check if this should be 'ourlegacy'
import OurHarvest from './pages/ourHarvest';  // Check if this should be 'ourharvest'
import Contact from './pages/Contact';
import Consultancy from './pages/consultancy'; // Fixed: changed to lowercase

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