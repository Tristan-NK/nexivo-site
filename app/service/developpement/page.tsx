"use client";

import { Code, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function DeveloppementPage() {
  return (
    <main className="min-h-screen bg-[#060918] text-gray-100 flex flex-col overflow-hidden">
      <div className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-600/10 blur-[140px] pointer-events-none z-0 mix-blend-screen" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none z-0 mix-blend-screen" />

      <Navbar />

      <section className="relative px-6 md:px-10 py-24 flex-1 z-10">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-4xl mx-auto">
          
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="h-20 w-20 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-8 shadow-[0_0_25px_rgba(6,182,212,0.15)]">
              <Code size={40} className="text-cyan-400" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-6">
              Développement
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
              Développement web <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">& apps</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Création de sites web, applications et plateformes digitales performantes pour les entreprises et particuliers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div variants={itemVariants} className="bg-[#0c1226] border border-white/5 hover:border-cyan-500/20 rounded-3xl p-8 transition-all duration-300">
              <h2 className="font-bold text-white text-xl mb-5">Ce que nous proposons</h2>
              <ul className="text-gray-300 space-y-3">
                {["Sites vitrines et e-commerce", "Applications web sur-mesure", "Interfaces d'administration intuitives", "Intégration d'API et services tiers"].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-[#0c1226] border border-white/5 hover:border-cyan-500/20 rounded-3xl p-8 transition-all duration-300">
              <h2 className="font-bold text-white text-xl mb-5">Nos engagements</h2>
              <ul className="text-gray-300 space-y-3">
                {["Performances et SEO optimisés", "Respect des délais et du budget", "Accompagnement après mise en production", "Livraison claire et maintenable"].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)] hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.7)] border border-white/10">
              Discuter de mon projet <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
