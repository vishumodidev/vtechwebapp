import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, User, Smartphone, Globe } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    
    import("../utils/whatsapp").then(({ sendWhatsAppMessage }) => {
      sendWhatsAppMessage(formData, "New Contact Page Inquiry");
    });

    alert("Thank you for reaching out! Redirecting to WhatsApp...");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-400" />,
      title: "Call Us",
      details: ["+91 88920 62682", "+91 99456 98462"],
      action: "tel:+918892062682",
    },
    {
      icon: <Mail className="w-6 h-6 text-green-400" />,
      title: "Email Us",
      details: ["connect@vtechintegratedsolutions.com"],
      action: "mailto:connect@vtechintegratedsolutions.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-yellow-400" />,
      title: "Visit Us",
      details: [
        "No. 45, 1st Floor, 100 Ft. Ring Road,",
        "Vysha Bank Colony, Mico Layout,",
        "BTM 2nd Stage, Bengaluru - 560029",
      ],
      action: "https://maps.google.com",
    },
  ];

  return (
    <div className="bg-[#061A2F] min-h-screen pt-20 text-white selection:bg-blue-500 selection:text-white border-y-[12px] border-yellow-500">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-20 px-6 text-center overflow-hidden">
         {/* Background Glow */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>
         
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         >
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
               24/7 Support
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500">Touch</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Have questions about our courses, placements, or corporate training? We're here to help you navigate your career journey.
            </p>
         </motion.div>
      </section>

      {/* ================= CONTENT GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 pb-24 grid lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* LEFT: Contact Info & Map */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
           <div className="grid gap-6">
             {contactInfo.map((item, idx) => (
               <a 
                 href={item.action} 
                 key={idx}
                 className="group flex items-start gap-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300"
               >
                 <div className="p-4 bg-slate-800 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg border border-slate-700">
                   {item.icon}
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                   {item.details.map((line, i) => (
                     <p key={i} className="text-slate-400 group-hover:text-blue-200 transition-colors">
                       {line}
                     </p>
                   ))}
                 </div>
               </a>
             ))}
           </div>

           {/* Map Embed Placeholder */}
           <div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative bg-slate-800 group">
              {/* Using an image for now, or actual iframe if available. Sticking to visual placeholder for "premium" feel if actual map not provided */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.750939527962!2d77.60955631482148!3d12.923722990887648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15037562c687%3A0x6d9073e271545620!2sVTech%20Integrated%20Solutions!5e0!3m2!1sen!2sin!4v1625567890123!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
           </div>
        </motion.div>

        {/* RIGHT: Contact Form */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-3xl p-8 lg:p-10 text-slate-900 shadow-2xl relative overflow-hidden">
             {/* Decor */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-[100px] -z-0"></div>
             
             <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
                <p className="text-slate-500 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                   <div className="grid md:grid-cols-2 gap-5">
                      <div className="relative">
                        <User className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                        <input 
                           type="text" 
                           placeholder="Your Name"
                           required
                           className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                           value={formData.name}
                           onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="relative">
                        <Smartphone className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                        <input 
                           type="tel" 
                           placeholder="Phone Number"
                           required
                           className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                           value={formData.phone}
                           onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                   </div>

                   <div className="relative">
                      <Mail className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                      <input 
                         type="email" 
                         placeholder="Email Address"
                         required
                         className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                         value={formData.email}
                         onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                   </div>

                   <div className="relative">
                      <MessageSquare className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                      <input 
                         type="text" 
                         placeholder="Subject"
                         className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                         value={formData.subject}
                         onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      />
                   </div>

                   <div className="relative">
                      <textarea 
                         placeholder="How can we help you?"
                         rows="4"
                         required
                         className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                         value={formData.message}
                         onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                   </div>

                   <button 
                      type="submit"
                      className="w-full py-4 bg-[#061A2F] text-white font-bold rounded-xl hover:bg-blue-900 hover:shadow-lg hover:shadow-blue-900/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                   >
                      <Send className="w-5 h-5" /> Send Message
                   </button>
                </form>
             </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}