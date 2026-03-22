import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Leaf, Droplets } from 'lucide-react';

const OurHarvest = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // === Updated Product Array ===
  const products = [
    { 
      id: 1, 
      img: '/sugarcane.jpg', 
      name: { en: 'Sugarcane', mr: 'ऊस' }, 
      desc: { 
        en: 'Premium grade sugarcane, harvested for sweetness and purity.',
        mr: 'गोडी आणि शुद्धतेसाठी काढणी केलेले प्रीमियम दर्जाचे ऊस.' 
      }
    },
    { 
      id: 2, 
      img: '/wheat.jpg', // Make sure you have wheat.jpg in public folder
      name: { en: 'Wheat', mr: 'गहू' }, 
      desc: { 
        en: 'Golden grains rich in nutrients, grown with organic traditional methods.',
        mr: 'पोषक तत्वांनी समृद्ध सुवर्ण धान्य, पारंपारिक सेंद्रिय पद्धतीने पिकवलेले.' 
      }
    },
    { 
      id: 3, 
      img: '/Soybean.jpg', 
      name: { en: 'Soybean', mr: 'सोयाबीन' },
      desc: { 
        en: 'High-quality soybean seeds, rich in protein and oil content.',
        mr: 'प्रथिने आणि तेलाने समृद्ध उच्च दर्जाचे सोयाबीन बियाणे.'
      }
    },
    { 
      id: 4, 
      img: '/Jowar.jpg', 
      name: { en: 'Jowar (Sorghum)', mr: 'ज्वारी' }, 
      desc: { 
        en: 'Traditional drought-resistant grain, a healthy staple of Maharashtra.',
        mr: 'आरोग्यदायी आणि पारंपारिक महाराष्ट्रीयन धान्य.'
      }
    },
    { 
      id: 5, 
      img: '/onion.jpg', // Make sure you have onion.jpg in public folder
      name: { en: 'Onion', mr: 'कांदा' }, 
      desc: { 
        en: 'Crisp, pungent, and organically cultivated for the best flavor.',
        mr: 'उत्कृष्ट चवीसाठी सेंद्रिय पद्धतीने पिकवलेला ताजा कांदा.' 
      }
    },
    { 
      id: 6, 
      img: '/garlic.jpeg', 
      name: { en: 'Garlic', mr: 'लसूण' },
      desc: { 
        en: 'Robust, full-flavored garlic bulbs, free from chemical enhancers.',
        mr: 'रसायनमुक्त, दमदार आणि पूर्ण चवीचे लसणाचे कांदे.'
      }
    },
    { 
      id: 7, 
      img: '/penuts.jpg', 
      name: { en: 'Peanuts', mr: 'भुईमूग' }, 
      desc: { 
        en: 'Nutritious organic peanuts, perfect for snacking or oil extraction.',
        mr: 'पौष्टिक सेंद्रिय भुईमूग, खाण्यासाठी किंवा तेल काढण्यासाठी योग्य.'
      }
    },
    { 
      id: 8, 
      img: '/Tur (Pigeon Pea).jpg', 
      name: { en: 'Tur (Pigeon Pea)', mr: 'तूर' }, 
      desc: { 
        en: 'Essential protein-rich pulse, grown with dedication and care.',
        mr: 'समर्पण आणि काळजीने पिकवलेली प्रथिनेयुक्त महत्त्वाची डाळ.'
      }
    }
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-farm-sand">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-farm-darkGreen mb-4"
          >
            From Our Land to <span className="text-farm-gold">Your Life</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg italic"
          >
            Explore our diverse range of organically nurtured crops. Every seed is sown with care and harvested with pride.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <img 
                  src={product.img} 
                  alt={product.name[currentLanguage]} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=1000&auto=format&fit=crop'; }} 
                />
                <div className="absolute top-4 left-4 bg-farm-gold text-farm-darkGreen text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-md">
                  100% Organic
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 text-left flex-grow">
                <h3 className="text-xl font-serif font-bold text-farm-darkGreen mb-2 group-hover:text-farm-gold transition-colors">
                  {product.name[currentLanguage]}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {product.desc[currentLanguage]}
                </p>
                <div className="flex items-center text-farm-lightGreen text-xs font-bold gap-1 mt-auto">
                   <Leaf size={14}/> {currentLanguage === 'mr' ? 'ताजी कापणी' : 'FRESH HARVEST'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurHarvest;