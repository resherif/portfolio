import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppLink = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    
    const phone = import.meta.env.VITE_WHATSAPP_NUMBER;
    const message = encodeURIComponent("Hello Reham, I saw your portfolio and would love to connect!");
    
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <button 
      onClick={handleClick}
      className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition-all shadow-md active:scale-95"
    >
      <MessageCircle size={20} />
      <span>Chat on WhatsApp</span>
    </button>
  );
};

export default WhatsAppLink;