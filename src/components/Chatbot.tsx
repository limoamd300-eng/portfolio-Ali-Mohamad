import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BotMessageSquare, X, Send, User, Bot } from 'lucide-react';
import { cn } from '../lib/utils';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  options?: string[];
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Greetings, I'm the AliOmar_Bot. How can I assist you?",
      sender: 'bot',
      options: ['View Skills', 'Request Quote', 'Contact Ali Omar']
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionClick = (option: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      text: option,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMsg]);

    // Bot response logic
    setTimeout(() => {
      let botText = "";
      let options: string[] = [];

      switch (option) {
        case 'View Skills':
          botText = "Ali specializes in Offensive Security (Pentesting, Exploitation) and Defensive Security (Encryption, SIEM). Check 'The Vault' section for details.";
          options = ['Security Archives', 'Certifications'];
          break;
        case 'Request Quote':
          botText = "For security audits or custom tool development, please use the 'Secure Messaging Protocol' in the Contact section.";
          options = ['Go to Contact', 'Main Menu'];
          break;
        case 'Contact Ali Omar':
          botText = "You can reach Ali via the contact form or LinkedIn. Would you like to see his PGP key?";
          options = ['Download PGP', 'Main Menu'];
          break;
        case 'Main Menu':
          botText = "How else can I assist your mission today?";
          options = ['View Skills', 'Request Quote', 'Contact Ali Omar'];
          break;
        default:
          botText = "Command not recognized. Returning to main protocol.";
          options = ['View Skills', 'Request Quote', 'Contact Ali Omar'];
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: 'bot',
        options
      };
      setMessages(prev => [...prev, botMsg]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 sm:w-96 cyber-card rounded-xl shadow-2xl flex flex-col h-[450px]"
          >
            {/* Header */}
            <div className="p-4 border-b border-cyber-border flex justify-between items-center bg-cyber-lime/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyber-lime animate-pulse" />
                <span className="font-mono text-xs font-bold text-cyber-lime">ALI_OMAR_BOT v1.0</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-cyber-lime transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-cyber-lime/20">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex flex-col", msg.sender === 'user' ? "items-end" : "items-start")}>
                  <div className={cn(
                    "max-w-[85%] p-3 rounded-lg text-sm font-mono",
                    msg.sender === 'user' 
                      ? "bg-cyber-blue/20 border border-cyber-blue/30 text-cyber-blue" 
                      : "bg-cyber-lime/10 border border-cyber-lime/20 text-cyber-lime"
                  )}>
                    {msg.text}
                  </div>
                  {msg.options && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleOptionClick(opt)}
                          className="text-[10px] px-2 py-1 rounded border border-cyber-lime/30 hover:bg-cyber-lime/20 transition-colors text-cyber-lime"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-3 border-t border-cyber-border bg-slate-900/80">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Awaiting command..."
                  className="w-full bg-black/50 border border-cyber-border rounded px-3 py-2 text-xs font-mono focus:outline-none focus:border-cyber-lime text-cyber-lime"
                  disabled
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-cyber-lime/50">
                  <Send size={14} />
                </div>
              </div>
              <p className="text-[8px] mt-2 text-center opacity-50 font-mono">ENCRYPTED_CHANNEL_ACTIVE</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300",
          isOpen ? "bg-cyber-red text-white" : "bg-cyber-lime text-black"
        )}
      >
        {isOpen ? <X size={24} /> : <BotMessageSquare size={24} />}
      </motion.button>
    </div>
  );
};
