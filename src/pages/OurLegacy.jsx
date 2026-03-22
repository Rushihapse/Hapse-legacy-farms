import { motion } from 'framer-motion';
import { Award, Leaf, Sprout, Tractor } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const OurLegacy = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-farm-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= GRANDFATHER SECTION (THE FOUNDATION) ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-24 mt-10"
        >
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-2 bg-gradient-to-tr from-farm-gold to-farm-darkGreen shadow-2xl">
              {/* Note: Update this src with the actual photo of Mahadev Appa Hapse */}
              <img 
                src="/grandfather.jpeg" 
                alt="Kai. Mahadev (Appa) Hapse" 
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-farm-darkGreen text-farm-gold px-6 py-2 rounded-full font-serif font-bold tracking-widest text-sm shadow-lg whitespace-nowrap">
                {t('legacy.founderBadge')}
              </div>
            </div>
          </div>

          {/* Unified Color: Dark Green for the full name */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-farm-darkGreen mb-4">
            Kai. Mahadev (Appa) Hapse
          </h1>
          
          <p className="text-farm-gold font-bold tracking-widest uppercase mb-8">
            {t('legacy.founderSubtitle')}
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light italic">
            {t('legacy.founderQuote')}
          </p>
        </motion.div>

        {/* ================= THE TWO BROTHERS SECTION ================= */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-farm-darkGreen mb-4">
            {t('legacy.pillarsTitle')}
          </h2>
          <div className="w-24 h-1 bg-farm-gold mx-auto rounded-full mb-12"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start" 
        >
          
          {/* FIRST CARD (LEFT): Sunilkumar */}
          <motion.div variants={itemVariants} className="bg-farm-darkGreen text-farm-sand rounded-3xl overflow-hidden shadow-xl border border-farm-darkGreen group">
            <div className="w-full aspect-square relative overflow-hidden">
              <img 
                src="/sunilkumar.jpg.jpeg" 
                alt="Sunilkumar Hapse" 
                className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105 opacity-95"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-left">
                <h2 className="text-3xl font-serif font-bold text-farm-gold">Sunilkumar Hapse</h2>
                <h3 className="text-gray-300 font-semibold tracking-wider text-sm uppercase">
                  {t('legacy.sunilTitle')}
                </h3>
              </div>
            </div>
            
            <div className="p-8 text-left">
              <p className="text-gray-300 leading-relaxed mb-6">
                {/* Text remains English until you add the specific description keys to i18n.js */}
                With a deep connection to the earth, Sunilkumar's hands know the soil better than any machine. Recognized as a master traditional farmer, he is the guardian of our family's original farming techniques.
              </p>
              <div className="flex gap-4 text-farm-gold">
                <Leaf size={28} />
                <Award size={28} />
              </div>
            </div>
          </motion.div>

          {/* SECOND CARD (RIGHT): Anilkumar */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
            <div className="w-full aspect-square relative overflow-hidden">
              <img 
                src="/anilkumar.jpg.jpeg" 
                alt="Anilkumar Hapse" 
                className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 text-left">
                <h2 className="text-3xl font-serif font-bold text-farm-darkGreen">Anilkumar Hapse</h2>
                <h3 className="text-farm-gold font-semibold tracking-wider text-sm uppercase">
                  {t('legacy.anilTitle')}
                </h3>
              </div>
            </div>
            
            <div className="p-8 text-left">
              <p className="text-gray-600 leading-relaxed mb-6">
                Bridging the vital gap between tradition and tomorrow, Anilkumar ensures our farm thrives for the next generation. He introduces modern machinery and efficient systems to take our harvest directly to you.
              </p>
              <div className="flex gap-4 text-farm-darkGreen">
                <Tractor size={28} />
                <Sprout size={28} />
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default OurLegacy;