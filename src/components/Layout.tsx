import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Terminal, Fingerprint, Lock, Ghost, Cpu, Menu, X, Github, Linkedin, Key } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavItemProps {
  label: string;
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ label, active, onClick, icon }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-2 px-4 py-2 font-mono text-sm transition-all relative group",
      active ? "text-cyber-lime" : "text-slate-400 hover:text-cyber-lime"
    )}
  >
    {icon}
    <span>{label}</span>
    {active && (
      <motion.div 
        layoutId="nav-active"
        className="absolute bottom-0 left-0 w-full h-[2px] bg-cyber-lime shadow-[0_0_10px_#32FF7E]"
      />
    )}
  </button>
);

export const Layout: React.FC<{ children: React.ReactNode, activeTab: string, setActiveTab: (tab: string) => void }> = ({ children, activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'COMMAND_CENTER', icon: <Terminal size={16} /> },
    { id: 'vault', label: 'THE_VAULT', icon: <Lock size={16} /> },
    { id: 'contact', label: 'ENCRYPTION_POINT', icon: <Fingerprint size={16} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Effects */}
      <div className="fixed inset-0 cyber-grid pointer-events-none" />
      <div className="fixed inset-0 scanline pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-cyber-bg via-transparent to-cyber-bg pointer-events-none" />
      
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-cyber-border bg-cyber-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 cyber-card flex items-center justify-center text-cyber-lime">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tighter text-white">ALI OMAR</h1>
              <p className="text-[10px] font-mono text-cyber-lime leading-none">SEC_LEVEL: 10</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <NavItem 
                key={item.id}
                label={item.label}
                active={activeTab === item.id}
                onClick={() => setActiveTab(item.id)}
                icon={item.icon}
              />
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-cyber-lime"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-cyber-bg pt-20 px-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-4 p-4 cyber-card rounded-lg font-mono",
                    activeTab === item.id ? "text-cyber-lime border-cyber-lime" : "text-slate-400"
                  )}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-cyber-border bg-black/40 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-mono text-xs opacity-60">
              © 2026 Ali Omar - <span className="text-cyber-lime">SECURE CONNECTION ESTABLISHED</span>
            </p>
            <p className="text-[10px] font-mono opacity-40 mt-1">IP_ADDR: 192.168.1.101 | PROTOCOL: HTTPS/TLS1.3</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 cyber-card flex items-center justify-center text-slate-400 hover:text-cyber-lime transition-colors">
              <Github size={18} />
            </a>
            <a href="#" className="w-10 h-10 cyber-card flex items-center justify-center text-slate-400 hover:text-cyber-blue transition-colors">
              <Linkedin size={18} />
            </a>
            <button className="flex items-center gap-2 px-4 py-2 cyber-card text-xs font-mono text-cyber-lime hover:bg-cyber-lime/10 transition-all">
              <Key size={14} />
              DOWNLOAD_PGP
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
