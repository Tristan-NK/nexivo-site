"use client";

import { Monitor, ArrowRight, CheckCircle } from "lucide-react";
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

export default function InfographiePage() {
  return (
    <main className="min-h-screen bg-[#060918] text-gray-100 flex flex-col overflow-hidden">
      <div className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-fuchsia-600/10 blur-[140px] pointer-events-none z-0 mix-blend-screen" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none z-0 mix-blend-screen" />

      <Navbar />

      <section className="relative px-6 md:px-10 py-24 flex-1 z-10">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-4xl mx-auto">
          
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="h-20 w-20 rounded-3xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mx-auto mb-8 shadow-[0_0_25px_rgba(217,70,239,0.15)]">
              <Monitor size={40} className="text-fuchsia-400" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-xs font-bold tracking-widest uppercase mb-6">
              Branding & Design
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
              Infographie <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">& branding</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Création de logos, affiches, flyers et identité visuelle adaptée à vos projets pour renforcer votre crédibilité.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div variants={itemVariants} className="bg-[#0c1226] border border-white/5 hover:border-fuchsia-500/20 rounded-3xl p-8 transition-all duration-300">
              <h2 className="font-bold text-white text-xl mb-5">Supports réalisés</h2>
              <ul className="text-gray-300 space-y-3">
                {["Logos et déclinaisons", "Cartes de visite et papeterie", "Affiches, flyers, brochures", "Visuels pour réseaux sociaux"].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-fuchsia-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-[#0c1226] border border-white/5 hover:border-fuchsia-500/20 rounded-3xl p-8 transition-all duration-300">
              <h2 className="font-bold text-white text-xl mb-5">Process de création</h2>
              <ul className="text-gray-300 space-y-3">
                {["Brief et compréhension de votre cible", "Propositions créatives et allers-retours", "Livraison des fichiers prêts à l'emploi", "Accompagnement pour l'impression et le digital"].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-fuchsia-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_30px_-5px_rgba(217,70,239,0.5)] hover:shadow-[0_0_40px_-5px_rgba(217,70,239,0.7)] border border-white/10">
              Lancer mon projet graphique <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
