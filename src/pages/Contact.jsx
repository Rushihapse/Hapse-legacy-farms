import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // NOTE: Ensure your backend/vercel dev is running to handle this /api/send route
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Backend Error:", errorData);
        setStatus('error');
      }
    } catch (err) {
      console.error("Network/404 Error:", err);
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-farm-sand transition-colors duration-500">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, tracking: "0.1em" }}
            animate={{ opacity: 1, tracking: "0.2em" }}
            className="text-farm-gold font-bold uppercase text-xs mb-4 block"
          >
            Available for Consultancy & Wholesale
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-black text-farm-darkGreen mb-6 tracking-tighter"
          >
            Let's <span className="text-farm-gold italic">Connect</span>
          </motion.h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Reach out to the Hapse family for fresh produce inquiries, 
            sustainable farming consultancy, or a visit to our legacy fields.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-stretch">
          
          {/* LEFT SIDE: Interactive Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-farm-darkGreen text-farm-sand p-10 md:p-14 rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-farm-gold/10 rounded-full -mr-40 -mt-40 blur-[80px]" />

            <div className="relative z-10">
              <h2 className="text-4xl font-serif font-bold text-farm-gold mb-12 tracking-tight">Farm Headquarters</h2>
              
              <div className="space-y-12">
                <div className="flex items-start gap-6 group cursor-default">
                  <div className="bg-white/5 p-4 rounded-2xl text-farm-gold group-hover:scale-110 group-hover:bg-farm-gold group-hover:text-farm-darkGreen transition-all duration-500 border border-white/10">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-widest text-xs opacity-60">Location</h4>
                    <p className="text-gray-300 font-medium leading-relaxed">
                      Hapse Farms, Tambewadi, Deolali,<br/>
                      Maharashtra 413502, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group cursor-default">
                  <div className="bg-white/5 p-4 rounded-2xl text-farm-gold group-hover:scale-110 group-hover:bg-farm-gold group-hover:text-farm-darkGreen transition-all duration-500 border border-white/10">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-widest text-xs opacity-60">Direct Call</h4>
                    <p className="text-gray-300 font-medium">+91 9075431967</p>
                    <p className="text-[10px] text-farm-gold/50 font-bold mt-1 uppercase">8:00 AM - 6:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group cursor-default">
                  <div className="bg-white/5 p-4 rounded-2xl text-farm-gold group-hover:scale-110 group-hover:bg-farm-gold group-hover:text-farm-darkGreen transition-all duration-500 border border-white/10">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-widest text-xs opacity-60">Inquiries</h4>
                    <p className="text-gray-300 font-medium border-b border-farm-gold/20 inline-block hover:border-farm-gold transition-colors">
                      hapselegacyfarms@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 relative z-10">
              <div className="h-px w-20 bg-farm-gold/30 mb-6" />
              <p className="text-sm italic text-farm-sand/60 leading-relaxed font-serif max-w-sm">
                "Rooted in tradition, growing with trust. We treat every inquiry as a seed for a new partnership."
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE: The Form Container */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-14 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col justify-center relative"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.6 }}
                    className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner"
                  >
                    <CheckCircle size={54} />
                  </motion.div>
                  <h2 className="text-4xl font-serif font-bold text-farm-darkGreen mb-4">Message Planted!</h2>
                  <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                    Thank you. Our family has received your inquiry. We'll sprout back a reply to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="flex items-center gap-2 mx-auto text-farm-gold font-black uppercase tracking-widest text-xs hover:text-farm-darkGreen transition-all"
                  >
                    Send Another <ArrowRight size={16} />
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-farm-darkGreen/40 ml-1">First Name</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full bg-gray-50 border-b-2 border-transparent px-4 py-4 focus:border-farm-gold focus:bg-white outline-none transition-all font-semibold rounded-t-xl" 
                        placeholder="John" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-farm-darkGreen/40 ml-1">Last Name</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full bg-gray-50 border-b-2 border-transparent px-4 py-4 focus:border-farm-gold focus:bg-white outline-none transition-all font-semibold rounded-t-xl" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-farm-darkGreen/40 ml-1">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-gray-50 border-b-2 border-transparent px-4 py-4 focus:border-farm-gold focus:bg-white outline-none transition-all font-semibold rounded-t-xl" 
                      placeholder="john@example.com" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-farm-darkGreen/40 ml-1">Message</label>
                    <textarea 
                      required 
                      rows="4" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-gray-50 border-b-2 border-transparent px-4 py-4 focus:border-farm-gold focus:bg-white outline-none transition-all font-semibold resize-none rounded-t-xl" 
                      placeholder="How can we help your harvest?"
                    ></textarea>
                  </div>

                  <button 
                    disabled={status === 'sending'}
                    type="submit" 
                    className={`w-full group py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all duration-500 shadow-xl ${
                      status === 'sending' 
                        ? 'bg-gray-200 text-gray-400 cursor-wait' 
                        : 'bg-farm-gold text-farm-darkGreen hover:bg-farm-darkGreen hover:text-farm-gold active:scale-[0.98]'
                    }`}
                  >
                    {status === 'sending' ? 'Transmitting...' : (
                      <>
                        Send Message <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      className="flex items-center gap-2 bg-red-50 p-4 rounded-xl border border-red-100 mt-4"
                    >
                      <AlertCircle size={18} className="text-red-500 shrink-0" />
                      <p className="text-red-600 text-[11px] font-bold leading-tight">
                        SYSTEM ERROR: Could not reach the mail server. Ensure your backend is running and the /api/send route is active.
                      </p>
                    </motion.div>
                  )}
                </form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 w-full h-[550px] rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white relative group"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.631473997163!2d75.67874596591714!3d18.35641251559467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc4fd00773edd49%3A0x4ba77c564ff0ba19!2sHapse%20Farms!5e1!3m2!1sen!2sin!4v1774177836822!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            className="grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            title="Hapse Legacy Farm Location"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-[1px] border-farm-darkGreen/10 rounded-[2.8rem]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;