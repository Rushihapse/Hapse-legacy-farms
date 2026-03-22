import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import OurStory from "./pages/ourstory";      // Matches ourstory.jsx
import OurLegacy from './pages/ourLegacy';    // Matches ourLegacy.jsx
import OurHarvest from './pages/ourHarvest';  // Matches ourHarvest.jsx
import Contact from './pages/Contact';        // Matches Contact.jsx
import Consultancy from './pages/consultancy'; // Matches consultancy.jsx

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
            <Route path="/consultancy" element={<Consultancy />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;