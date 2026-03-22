import { motion } from 'framer-motion';
import { Target, Eye, Heart, Sprout, Sun, Tractor, Leaf } from 'lucide-react';

const OurStory = () => {
  const timelineEvents = [
    { year: "1985", title: "The First Seed", desc: "Our grandfather purchased the first 5 acres of barren land in Maharashtra, driven by a dream of pure agriculture.", icon: Sprout },
    { year: "1998", title: "Embracing Organic", desc: "Transitioned completely away from chemical fertilizers, returning to traditional, natural soil enrichment.", icon: Leaf },
    { year: "2010", title: "Modernization", desc: "The Uncle introduced modern drip irrigation and mechanized harvesting, doubling yield without harming the earth.", icon: Tractor },
    { year: "2024", title: "Hapse Legacy Farm", desc: "Officially launched as a premium organic brand, bringing our family's harvest directly to health-conscious homes.", icon: Sun }
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-farm-sand">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-farm-darkGreen mb-6"
          >
            Our <span className="text-farm-gold">Story</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            What started as a small family endeavor has grown into a beacon of sustainable agriculture in Maharashtra. Managed completely by our Father and Uncle, Hapse Legacy Farm represents the perfect harmony between generational wisdom and modern innovation.
          </motion.p>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: Target, title: "Our Mission", text: "To empower local farming while delivering 100% organic, nutrient-rich produce from our soil directly to your table." },
            { icon: Eye, title: "Our Vision", text: "To build a sustainable, global agricultural network that champions traditional Maharashtrian farming methods." },
            { icon: Heart, title: "Our Values", text: "Rooted in trust, absolute purity, and a steadfast commitment to the health of our consumers and our land." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-farm-gold text-center"
            >
              <div className="w-16 h-16 mx-auto bg-farm-darkGreen text-farm-gold rounded-full flex items-center justify-center mb-6">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-farm-darkGreen mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* The Animated Timeline */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-farm-darkGreen mb-16">The Journey of our Land</h2>
          
          <div className="relative border-l-4 border-farm-gold/30 ml-4 md:ml-1/2 space-y-12 pb-10">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative pl-10 md:pl-16"
              >
                {/* Timeline Dot / Icon */}
                <div className="absolute -left-[22px] top-0 w-10 h-10 bg-farm-gold rounded-full flex items-center justify-center text-farm-darkGreen shadow-md border-4 border-farm-sand">
                  <event.icon size={20} />
                </div>
                
                {/* Content Card */}
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                  <span className="text-farm-gold font-bold text-xl mb-2 block">{event.year}</span>
                  <h3 className="text-2xl font-serif font-bold text-farm-darkGreen mb-3">{event.title}</h3>
                  <p className="text-gray-600">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurStory;