import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Vault } from './components/Vault';
import { Contact } from './components/Contact';
import { Chatbot } from './components/Chatbot';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // Simulate system boot
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isInitialLoading) {
    return (
      <div className="fixed inset-0 bg-cyber-bg flex items-center justify-center z-50 font-mono">
        <div className="text-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            className="h-1 bg-cyber-lime mb-4 shadow-[0_0_10px_#32FF7E]"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-cyber-lime text-xs tracking-widest"
          >
            BOOTING_SYSTEM_ALI_OMAR...
          </motion.p>
          <p className="text-[10px] text-slate-500 mt-2">DECRYPTING_ASSETS [OK]</p>
        </div>
      </div>
    );
  }

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'home' && <Home />}
          {activeTab === 'vault' && <Vault />}
          {activeTab === 'contact' && <Contact />}
        </motion.div>
      </AnimatePresence>
      <Chatbot />
    </Layout>
  );
}
