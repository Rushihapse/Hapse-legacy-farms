import { Link } from 'react-router-dom';
import { Sprout, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-farm-darkGreen text-farm-sand pt-16 pb-8 border-t-4 border-farm-gold">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Section */}
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 text-2xl font-serif font-bold text-farm-gold mb-4">
            <Sprout size={28} />
            <span>Hapse Legacy</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Rooted in Tradition, Growing with Trust. Delivering pure, organically nurtured produce directly from the heart of Maharashtra.
          </p>
          <div className="flex gap-4 text-farm-gold">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-serif font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-farm-gold transition-colors">Home</Link></li>
            <li><Link to="/our-story" className="hover:text-farm-gold transition-colors">Our Story</Link></li>
            <li><Link to="/our-harvest" className="hover:text-farm-gold transition-colors">Our Harvest</Link></li>
            <li><Link to="/our-legacy" className="hover:text-farm-gold transition-colors">Our Legacy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-serif font-bold text-white mb-4">Reach Out</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-farm-gold shrink-0 mt-1" />
              <span>Hapse Farms, 9M5M+28, Tambewadi, Deolali,<br/>Maharashtra, India 410502</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-farm-gold shrink-0" />
              <span>+91 9075431967</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-farm-gold shrink-0" />
              <span>hapselegacyfarms@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-serif font-bold text-white mb-4">Stay Connected</h3>
          <p className="text-gray-400 text-sm mb-4">Subscribe for seasonal harvest updates and farm news.</p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-farm-gold transition-colors"
            />
            <button className="bg-farm-gold text-farm-darkGreen font-bold py-2 rounded-lg hover:bg-yellow-400 transition-colors">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Hapse Legacy Farm. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;