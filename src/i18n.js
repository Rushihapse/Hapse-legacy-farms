import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  // ================= ENGLISH =================
  en: {
    translation: {
      // 1. Navbar
      navbar: { 
        home: "Home", 
        story: "Our Story", 
        harvest: "Our Harvest", 
        consultancy: "Consultancy",
        legacy: " Our Legacy", 
        contact: "Contact" 
      },
      
      // 2. Home Page
      home: { 
        heroTitle1: "Rooted in Tradition,", 
        heroTitle2: "Growing with Trust", 
        heroSub: "Family-driven organic farming from the heart of Maharashtra.",
        btn: "Explore Our Harvest",
        philosophyTitle: "Our Philosophy",
        features: {
          traditional: { title: "Traditional Wisdom", desc: "Honoring generations of Maharashtrian agricultural heritage." },
          modern: { title: "Modern Efficiency", desc: "Utilizing modern equipment to ensure sustainable, high-yield growth." },
          organic: { title: "Purely Organic", desc: "Committed to chemical-free processes for the health of your family." }
        },
        stats: { acres: "Acres of Land", crops: "Varieties of Crops", harvest: "Tons Annual Harvest", legacy: "Years of Legacy" }
      },

      // 3. Our Legacy Page
      legacy: {
        pageTitle: "Our Legacy",
        founderBadge: "OUR FOUNDER",
        founderSubtitle: "Late Founder • Laid the Foundation • 1970",
        founderQuote: "\"Before there were tractors and modern irrigation, there was only the soil, the rain, and his unwavering faith...\"",
        pillarsTitle: "The Two Pillars of Our Farm",
        sunilTitle: "The Traditional Farmer • Master of Soil",
        anilTitle: "The Bridge to Modern Farming"
      },
      
      // 4. Our Harvest Page
      harvest: {
        pageTitle: "Our Harvest",
        subtitle: "Fresh from our fields to your table."
      },
      
      // 5. Contact Page
      contact: {
        pageTitle: "Get in Touch",
        address: "Pimpri-Chinchwad, Maharashtra, India"
      }
    }
  },

  // ================= MARATHI =================
  mr: {
    translation: {
      navbar: { 
        home: "मुख्य पृष्ठ", 
        story: "आमची कथा", 
        harvest: "आमचे पीक", 
        consultancy: "शेती सल्ला", 
        legacy: "⭐ आमचा वारसा", 
        contact: "संपर्क" 
      },
      home: { 
        heroTitle1: "परंपरेशी जोडलेले,", 
        heroTitle2: "विश्वासाने वाढणारे", 
        heroSub: "महाराष्ट्राच्या हृदयातून कुटुंबाद्वारे चालवली जाणारी सेंद्रिय शेती.",
        btn: "आमचे पीक पहा",
        philosophyTitle: "आमचे तत्त्वज्ञान",
        features: {
          traditional: { title: "पारंपारिक शहाणपण", desc: "महाराष्ट्राच्या कृषी वारशाच्या पिढ्यानपिढ्यांचा सन्मान." },
          modern: { title: "आधुनिक कार्यक्षमता", desc: "शाश्वत, उच्च-उत्पन्नाच्या वाढीची खात्री करण्यासाठी आधुनिक उपकरणांचा वापर." },
          organic: { title: "संपूर्ण सेंद्रिय", desc: "तुमच्या कुटुंबाच्या आरोग्यासाठी रसायनमुक्त प्रक्रियांसाठी वचनबद्ध." }
        },
        stats: { acres: "एकर जमीन", crops: "पिकांच्या जाती", harvest: "टन वार्षिक उत्पादन", legacy: "वर्षांचा वारसा" }
      },
      legacy: {
        pageTitle: "आमचा वारसा",
        founderBadge: "आमचे संस्थापक",
        founderSubtitle: "स्वर्गीय संस्थापक • पाया रचला • १९७०",
        founderQuote: "\"जेव्हा ट्रॅक्टर आणि आधुनिक सिंचन नव्हते, तेव्हा फक्त माती, पाऊस आणि त्यांचा अढळ विश्वास होता...\"",
        pillarsTitle: "आमच्या शेतीचे दोन स्तंभ",
        sunilTitle: "पारंपारिक शेतकरी • मातीचे जाणकार",
        anilTitle: "आधुनिक शेतीचा दुवा"
      },
      harvest: {
        pageTitle: "आमचे पीक",
        subtitle: "आमच्या शेतातून थेट तुमच्या ताटात."
      },
      contact: {
        pageTitle: "संपर्क साधा",
        address: "पिंपरी-चिंचवड, महाराष्ट्र, भारत"
      }
    } // This was the missing closing brace!
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;