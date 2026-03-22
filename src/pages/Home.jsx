import { motion } from 'framer-motion';
import { Leaf, Tractor, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
// We are importing specifically from the component path to avoid the "object" error
import CountUp from 'react-countup'; 
import { useInView } from 'react-intersection-observer';

// --- Animated Counter Sub-Component ---
const StatItem = ({ end, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
    ,
  });

  // Extract the number and suffix (like + or k+)
  const endString = String(end || "");
  const numericValue = parseInt(endString.replace(/\D/g, '')) || 3; 
  const suffix = endString.replace(/[0-9]/g, ''); 

  return (
    <div ref={ref} className="flex flex-col items-center min-h-[100px]">
      <div className="text-4xl md:text-5xl font-serif font-bold text-farm-gold mb-2">
        {inView ? (
          <>
            {/* This check ensures that even if the library has an import issue, 
              the website won't crash; it will just show the number.
            */}
            {typeof CountUp === 'function' ? (
              <CountUp start={0} end={numericValue} duration={3} suffix={suffix} />
            ) : (
              <span>{numericValue}{suffix}</span>
            )}
          </>
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <motion.div 
        initial={{ opacity: 5 }}
        animate={inView ? { opacity: 1 } : { opacity: 5}}
        transition={{ duration: 1 }}
        className="text-sm md:text-base tracking-wider uppercase opacity-80 font-medium"
      >
        {label}
      </motion.div>
    </div>
  );
};

const Home = () => {
  const { t } = useTranslation();

  const features = [
    { Icon: Leaf, title: t('home.features.traditional.title'), desc: t('home.features.traditional.desc') },
    { Icon: Tractor, title: t('home.features.modern.title'), desc: t('home.features.modern.desc') },
    { Icon: ShieldCheck, title: t('home.features.organic.title'), desc: t('home.features.organic.desc') }
  ];

  const stats = [
    { end: "100+", label: t('home.stats.acres') },
    { end: "8", label: t('home.stats.crops') },
    { end: "100k+", label: t('home.stats.harvest') },
    { end: "80+", label: t('home.stats.legacy') }
  ];

  return (
    <div className="w-full relative">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-farm-darkGreen">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/Baground.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-farm-sand mb-6 leading-tight"
          >
            {t('home.heroTitle1')} <br/>
            <span className="text-farm-gold">{t('home.heroTitle2')}</span>
          </motion.h1>
          <motion.p className="text-lg md:text-2xl text-gray-200 mb-10 font-light italic">
            {t('home.heroSub')}
          </motion.p>
          <button className="bg-farm-gold text-farm-darkGreen px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105">
            {t('home.btn')}
          </button>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="relative z-20 py-24 bg-farm-sand px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-farm-darkGreen mb-16">
            {t('home.philosophyTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((item, index) => (
              <motion.div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-farm-gold mb-6 flex justify-center"><item.Icon size={48} /></div>
                <h3 className="text-2xl font-bold text-farm-earth mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative z-20 py-24 bg-farm-darkGreen text-farm-sand border-b-4 border-farm-gold">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <StatItem key={index} end={stat.end} label={stat.label} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;