import React from 'react';
import { motion } from 'motion/react';
import { Send, Terminal, Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tighter">
            ENCRYPTION_<span className="text-cyber-lime">POINT</span>
          </h2>
          <p className="text-slate-400 mb-12 max-w-md font-mono text-sm">
            Establishing a secure communication channel. All messages are encrypted via end-to-end protocols.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 cyber-card flex items-center justify-center text-cyber-lime group-hover:shadow-[0_0_15px_#32FF7E] transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-cyber-lime uppercase tracking-widest">Identifier</p>
                <p className="text-white font-mono">ali.omar@secure.net</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 cyber-card flex items-center justify-center text-cyber-blue group-hover:shadow-[0_0_15px_#00D4FF] transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-cyber-blue uppercase tracking-widest">Location</p>
                <p className="text-white font-mono">Digital Space / Global</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 cyber-card flex items-center justify-center text-cyber-red group-hover:shadow-[0_0_15px_#FF3E3E] transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-cyber-red uppercase tracking-widest">Emergency_Comms</p>
                <p className="text-white font-mono">+1 (555) SEC-URE1</p>
              </div>
            </div>
          </div>

          <div className="mt-16 p-6 cyber-card border-dashed border-cyber-lime/30">
            <div className="flex items-center gap-3 mb-4 text-cyber-lime">
              <Terminal size={18} />
              <span className="font-mono text-xs font-bold">SYSTEM_LOGS</span>
            </div>
            <div className="space-y-2 font-mono text-[10px] opacity-40">
              <p>[07:50:58] INITIALIZING_SECURE_HANDSHAKE...</p>
              <p>[07:50:59] KEY_EXCHANGE_SUCCESSFUL</p>
              <p>[07:51:00] CHANNEL_READY_FOR_INPUT</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="cyber-card p-8 md:p-10"
        >
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white font-mono">SECURE_MESSAGING_PROTOCOL</h3>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-cyber-red" />
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <div className="w-2 h-2 rounded-full bg-cyber-lime" />
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-cyber-lime uppercase tracking-widest block">
                [Enter_Identifier]
              </label>
              <input 
                type="text" 
                placeholder="Name / Alias"
                className="w-full bg-black/40 border border-cyber-border rounded p-3 font-mono text-sm focus:outline-none focus:border-cyber-lime text-white placeholder:opacity-30"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-cyber-lime uppercase tracking-widest block">
                [Return_Address]
              </label>
              <input 
                type="email" 
                placeholder="Email"
                className="w-full bg-black/40 border border-cyber-border rounded p-3 font-mono text-sm focus:outline-none focus:border-cyber-lime text-white placeholder:opacity-30"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-cyber-lime uppercase tracking-widest block">
                [Input_Message]
              </label>
              <textarea 
                rows={5}
                placeholder="Type your message here..."
                className="w-full bg-black/40 border border-cyber-border rounded p-3 font-mono text-sm focus:outline-none focus:border-cyber-lime text-white placeholder:opacity-30 resize-none"
              />
            </div>

            <button className="w-full py-4 bg-cyber-lime text-black font-bold font-mono rounded flex items-center justify-center gap-3 hover:bg-cyber-lime/80 transition-all group overflow-hidden relative">
              <span className="relative z-10 flex items-center gap-2">
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                TRANSMIT_DATA
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
