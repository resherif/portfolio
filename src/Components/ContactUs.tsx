import { Mail, MessageCircle } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa6';
const Contact = () => {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER;

  return (
    <section id="Contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-slate-800">Get In Touch</h2>
        <p className="text-slate-500 mb-10">Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        
        <div className="grid sm:grid-cols-3 gap-6">
          {/* Email */}
          <a href="mailto:rehamsherrif@gmail.com" 
             className="group p-8 border border-slate-100 rounded-2xl hover:bg-blue-50 transition-all duration-300">
            <Mail className="mx-auto mb-4 text-slate-400 group-hover:text-blue-600" size={32} />
            <span className="block font-semibold text-slate-700">Email</span>
          </a>

          {/* WhatsApp */}
          <a href={`https://wa.me/${phone}`} 
             target="_blank" rel="noreferrer"
             className="group p-8 border border-slate-100 rounded-2xl hover:bg-green-50 transition-all duration-300">
            <MessageCircle className="mx-auto mb-4 text-slate-400 group-hover:text-green-600" size={32} />
            <span className="block font-semibold text-slate-700">WhatsApp</span>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/reham-sherif-a6b631216" 
             target="_blank" rel="noreferrer"
             className="group p-8 border border-slate-100 rounded-2xl hover:bg-blue-50 transition-all duration-300">
            <FaLinkedin className="mx-auto mb-4 text-slate-400 group-hover:text-blue-700" size={32} />
            <span className="block font-semibold text-slate-700">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;