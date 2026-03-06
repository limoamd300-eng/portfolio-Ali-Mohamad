import React from 'react';
import { motion } from 'motion/react';
import { Typewriter } from 'react-simple-typewriter';
import { Cpu, ShieldCheck, Bug, Activity } from 'lucide-react';
import { cn } from '../lib/utils';

export const Home: React.FC = () => {
  const metrics = [
    { label: 'Bugs Found', value: '100+', icon: <Bug size={20} />, color: 'text-cyber-red' },
    { label: 'Active Research', value: '5', icon: <Activity size={20} />, color: 'text-cyber-blue' },
    { label: 'Security Clearance', value: 'Level 10', icon: <ShieldCheck size={20} />, color: 'text-cyber-lime' },
    { label: 'System Status', value: 'Secure', icon: <Cpu size={20} />, color: 'text-cyber-lime' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-lime/10 border border-cyber-lime/30 text-cyber-lime text-[10px] font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-cyber-lime animate-pulse" />
            SYSTEM_STATUS: OPERATIONAL
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
            SYSTEM: <span className="text-cyber-lime">ALI OMAR</span>
          </h1>
          
          <div className="h-12 text-xl md:text-2xl font-mono text-slate-400 mb-8">
            <Typewriter
              words={[
                'Defending the Architecture of Tomorrow.',
                'Securing Digital Frontiers.',
                'Bug Bounty Hunter & Security Researcher.',
                'Exploiting Vulnerabilities to Build Better.'
              ]}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>

          <p className="text-slate-400 max-w-lg mb-10 leading-relaxed">
            Specialized in penetration testing, vulnerability assessment, and building secure-by-design systems. 
            Committed to identifying critical flaws before they can be exploited.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-cyber-lime text-black font-bold font-mono rounded hover:bg-cyber-lime/80 transition-all shadow-[0_0_20px_rgba(50,255,126,0.3)]">
              INITIATE_CONTACT
            </button>
            <button className="px-8 py-3 border border-cyber-border text-white font-bold font-mono rounded hover:bg-white/5 transition-all">
              VIEW_ARCHIVES
            </button>
          </div>
        </motion.div>

        {/* Hero Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Hexagonal Border Effect */}
            <div className="absolute inset-0 border-2 border-cyber-lime/30 rotate-45 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-0 border-2 border-cyber-blue/30 -rotate-45 animate-[spin_15s_linear_infinite]" />
            
            <div className="absolute inset-4 cyber-card overflow-hidden group">
              <img 
                src="https://picsum.photos/seed/hacker/800/800" 
                alt="Ali Omar" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-cyber-lime/10 group-hover:bg-transparent transition-all" />
              
              {/* Scanline effect on image */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-lime/5 to-transparent h-1/2 w-full animate-[scanline_4s_linear_infinite]" />
            </div>

            {/* Floating UI Elements */}
            <div className="absolute -top-4 -right-4 cyber-card p-3 animate-bounce">
              <ShieldCheck className="text-cyber-lime" size={32} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24">
        {metrics.map((metric, idx) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            className="cyber-card p-6 group hover:border-cyber-lime transition-all"
          >
            <div className={cn("mb-4", metric.color)}>
              {metric.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{metric.value}</h3>
            <p className="text-[10px] font-mono uppercase tracking-widest opacity-50">{metric.label}</p>
            
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-[1px] bg-cyber-lime/30" />
              <div className="absolute top-0 right-0 w-[1px] h-full bg-cyber-lime/30" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
