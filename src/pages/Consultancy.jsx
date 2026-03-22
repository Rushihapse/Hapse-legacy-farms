import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Users, GraduationCap, Sprout, TrendingUp, CheckCircle } from 'lucide-react';

const Consultancy = () => {
  const { t, i18n } = useTranslation();
  const isMr = i18n.language === 'mr';

  const services = [
    {
      icon: <Sprout className="text-farm-gold" size={32} />,
      title: isMr ? "पीक नियोजन" : "Crop Planning",
      desc: isMr ? "तुमच्या जमिनीसाठी योग्य वाण निवडणे." : "Selecting the right varieties for your specific soil type."
    },
    {
      icon: <TrendingUp className="text-farm-gold" size={32} />,
      title: isMr ? "उत्पन्न वाढ" : "Yield Optimization",
      desc: isMr ? "कमी खर्चात जास्त उत्पादन घेण्याचे तंत्र." : "Techniques to maximize output while minimizing input costs."
    },
    {
      icon: <GraduationCap className="text-farm-gold" size={32} />,
      title: isMr ? "सेंद्रिय प्रशिक्षण" : "Organic Training",
      desc: isMr ? "रसायनमुक्त शेतीसाठी लागणारे मार्गदर्शन." : "Step-by-step guidance on transitioning to chemical-free farming."
    }
  ];

  const expertCrops = [
    { name: isMr ? "ऊस" : "Sugarcane", img: "/sugarcane.jpg" },
    { name: isMr ? "गहू" : "Wheat", img: "/wheat.jpg" },
    { name: isMr ? "सोयाबीन" : "Soybean", img: "/Soybean.jpg" },
    { name: isMr ? "कांदा" : "Onion", img: "/onion.jpg" }
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-farm-sand">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-3 bg-farm-darkGreen rounded-2xl mb-6"
          >
            <Users className="text-farm-gold" size={40} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-farm-darkGreen mb-4"
          >
            {isMr ? "शेती" : "Agricultural"} <span className="text-farm-gold">{isMr ? "सल्लागार" : "Consultancy"}</span>
          </motion.h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg italic">
            {isMr ? "आमचा ८० वर्षांचा अनुभव आता तुमच्या शेतात. आम्ही इतर शेतकऱ्यांना प्रगत आणि सेंद्रिय शेतीसाठी मार्गदर्शन करतो." 
                  : "Sharing 80+ years of farming wisdom. We empower fellow farmers with modern techniques and traditional organic secrets."}
          </p>
        </div>

        {/* --- Services Grid --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-farm-gold"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-farm-darkGreen mb-3">{service.title}</h3>
              <p className="text-gray-500">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- Specific Crop Expertise --- */}
        <div className="bg-farm-darkGreen rounded-[3rem] p-10 md:p-16 text-farm-sand relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-farm-gold">
                {isMr ? "आमचे विशेष नैपुण्य" : "Our Crop Expertise"}
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                {isMr ? "आम्ही प्रामुख्याने खालील पिकांसाठी सविस्तर सल्ला देतो, जेणेकरून तुम्हाला जास्तीत जास्त फायदा होईल:" 
                      : "We specialize in providing end-to-end consultation for the crops we master daily on our own land:"}
              </p>
              <ul className="space-y-4">
                {expertCrops.map((crop, i) => (
                  <li key={i} className="flex items-center gap-3 text-xl">
                    <CheckCircle className="text-farm-gold" size={24} />
                    {crop.name}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {expertCrops.map((crop, i) => (
                <div key={i} className="h-40 rounded-2xl overflow-hidden shadow-2xl">
                  <img src={crop.img} alt={crop.name} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Call to Action --- */}
        <div className="mt-20 text-center">
          <button className="bg-farm-darkGreen text-farm-gold px-10 py-4 rounded-full font-bold text-xl hover:bg-farm-earth transition-all shadow-xl">
            {isMr ? "आजच संपर्क साधा" : "Book a Consultation"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consultancy;