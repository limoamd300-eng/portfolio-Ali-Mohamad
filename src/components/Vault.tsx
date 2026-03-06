import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, ShieldAlert, CheckCircle2, Award } from 'lucide-react';
import { cn } from '../lib/utils';

export const Vault: React.FC = () => {
  const projects = [
    {
      title: "Packet Sniffer",
      desc: "Advanced network traffic analyzer with real-time packet inspection and protocol decoding.",
      threat: "CRITICAL",
      tech: ["Python", "Scapy", "Wireshark"],
      link: "#"
    },
    {
      title: "Secure Auth System",
      desc: "Multi-factor authentication framework using biometric verification and JWT encryption.",
      threat: "HIGH",
      tech: ["Node.js", "Redis", "WebAuthn"],
      link: "#"
    },
    {
      title: "Vulnerability Scanner",
      desc: "Automated tool for identifying SQL injection and XSS vulnerabilities in web applications.",
      threat: "MODERATE",
      tech: ["Go", "Docker", "OWASP"],
      link: "#"
    }
  ];

  const skills = {
    offensive: ["Penetration Testing", "Exploitation", "Python/Bash Scripting", "Reverse Engineering", "Social Engineering"],
    defensive: ["Encryption (AES/RSA)", "Firewall Configuration", "SIEM (Splunk/ELK)", "Cloud Security", "Incident Response"]
  };

  const certs = [
    { name: "OSCP", issuer: "OffSec", color: "text-cyber-red" },
    { name: "eJPT", issuer: "eLearnSecurity", color: "text-cyber-blue" },
    { name: "Security+", issuer: "CompTIA", color: "text-cyber-lime" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
      {/* Projects Section */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white">SECURITY_ARCHIVES</h2>
          <div className="flex-1 h-[1px] bg-cyber-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="cyber-card p-6 flex flex-col group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={cn(
                  "px-2 py-1 text-[10px] font-mono rounded border",
                  project.threat === 'CRITICAL' ? "border-cyber-red text-cyber-red bg-cyber-red/10" :
                  project.threat === 'HIGH' ? "border-orange-500 text-orange-500 bg-orange-500/10" :
                  "border-cyber-blue text-cyber-blue bg-cyber-blue/10"
                )}>
                  THREAT_LEVEL: {project.threat}
                </div>
                <div className="flex gap-2">
                  <a href={project.link} className="text-slate-400 hover:text-cyber-lime transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={project.link} className="text-slate-400 hover:text-cyber-lime transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-lime transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400 mb-6 flex-1">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-mono px-2 py-1 bg-white/5 rounded border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills & Certs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Offensive Skills */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="cyber-card p-8"
        >
          <div className="flex items-center gap-3 mb-6 text-cyber-red">
            <ShieldAlert size={24} />
            <h3 className="text-lg font-bold">OFFENSIVE_PROTOCOLS</h3>
          </div>
          <ul className="space-y-4">
            {skills.offensive.map(skill => (
              <li key={skill} className="flex items-center gap-3 text-sm font-mono">
                <div className="w-1.5 h-1.5 bg-cyber-red rounded-full" />
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Defensive Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cyber-card p-8"
        >
          <div className="flex items-center gap-3 mb-6 text-cyber-blue">
            <CheckCircle2 size={24} />
            <h3 className="text-lg font-bold">DEFENSIVE_SHIELDS</h3>
          </div>
          <ul className="space-y-4">
            {skills.defensive.map(skill => (
              <li key={skill} className="flex items-center gap-3 text-sm font-mono">
                <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full" />
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="cyber-card p-8"
        >
          <div className="flex items-center gap-3 mb-6 text-cyber-lime">
            <Award size={24} />
            <h3 className="text-lg font-bold">VERIFIED_CREDENTIALS</h3>
          </div>
          <div className="space-y-6">
            {certs.map(cert => (
              <div key={cert.name} className="relative group">
                <div className={cn(
                  "p-4 border border-cyber-border rounded-lg bg-black/40 group-hover:border-cyber-lime transition-all relative overflow-hidden",
                  "shadow-[0_0_15px_rgba(50,255,126,0.05)]"
                )}>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className={cn("font-bold text-lg", cert.color)}>{cert.name}</h4>
                      <p className="text-[10px] font-mono opacity-50 uppercase">{cert.issuer}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-cyber-lime/10 flex items-center justify-center text-cyber-lime">
                      <CheckCircle2 size={16} />
                    </div>
                  </div>
                  {/* Verified Glow Effect */}
                  <div className="absolute inset-0 bg-cyber-lime/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
