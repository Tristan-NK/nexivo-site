"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative border-t border-indigo-500/10 bg-[#060918] px-6 md:px-10 py-16 text-gray-400 text-sm overflow-hidden">
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-fuchsia-600/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-16 relative z-10"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20 border border-white/10 text-white font-black text-lg">
              N
            </div>
            <h4 className="text-white font-bold text-xl tracking-tight">Nexivo</h4>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            Startup technologique gabonaise concevant des solutions numériques de haute précision pour les entreprises de la région.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="text-white font-semibold mb-6">Navigation</h4>
          <ul className="space-y-3">
            <li><Link href="/#services" className="hover:text-indigo-400 text-gray-300 transition-colors">Expertise</Link></li>
            <li><Link href="/a-propos" className="hover:text-indigo-400 text-gray-300 transition-colors">Notre équipe</Link></li>
            <li><Link href="/#contact" className="hover:text-indigo-400 text-gray-300 transition-colors">Contact</Link></li>
            <li><Link href="/service" className="hover:text-indigo-400 text-gray-300 transition-colors">Services dédiés</Link></li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="text-white font-semibold mb-6">Contact</h4>
          <ul className="space-y-3">
            <li>
              <span className="text-indigo-500 block text-xs font-bold uppercase tracking-widest mb-1">Email</span>
              <a href="mailto:contact@nexivo.ga" className="text-gray-200 hover:text-indigo-400 transition-colors font-medium">
                contact@nexivo.ga
              </a>
            </li>
            <li>
              <span className="text-indigo-500 block text-xs font-bold uppercase tracking-widest mb-1">Téléphone</span>
              <span className="text-gray-200 font-medium">+241 00 00 00 00</span>
            </li>
            <li>
              <span className="text-indigo-500 block text-xs font-bold uppercase tracking-widest mb-1">Localisation</span>
              <span className="text-gray-200 font-medium">Libreville, Gabon</span>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="text-white font-semibold mb-6">Réseaux</h4>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center hover:bg-indigo-600/30 hover:border-indigo-400/50 hover:text-indigo-300 transition-all font-bold text-indigo-400 shadow-sm hover:scale-110">
              <span className="text-xs">LN</span>
            </a>
            <a href="#" className="h-10 w-10 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center hover:bg-fuchsia-600/30 hover:border-fuchsia-400/50 hover:text-fuchsia-300 transition-all font-bold text-fuchsia-400 shadow-sm hover:scale-110">
              <span className="text-xs">IG</span>
            </a>
            <a href="#" className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center hover:bg-cyan-600/30 hover:border-cyan-400/50 hover:text-cyan-300 transition-all font-bold text-cyan-400 shadow-sm hover:scale-110">
              <span className="text-xs">TW</span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-6xl mx-auto border-t border-indigo-500/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 text-xs"
      >
        <p className="text-gray-500 font-medium">© 2026 Nexivo — Excellence Numérique au Gabon.</p>
        <div className="flex gap-8 text-gray-500">
          <Link href="/confidentialite" className="hover:text-gray-300 transition-colors">Confidentialité</Link>
          <Link href="/conditions" className="hover:text-gray-300 transition-colors">Conditions</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">Cookies</Link>
        </div>
      </motion.div>
    </footer>
  );
}
