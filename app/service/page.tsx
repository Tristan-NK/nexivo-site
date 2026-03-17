"use client";

import Link from "next/link";
import { Code, Monitor, Settings, Wifi, ArrowRight, Layers } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion, Variants } from "framer-motion";

const services = [
  { title: "Développement", slug: "/service/developpement", icon: Code, description: "Sites web, applications et plateformes digitales sur-mesure.", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "hover:border-cyan-400/30 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]" },
  { title: "Infographie", slug: "/service/infographie", icon: Monitor, description: "Identité visuelle, logos et supports de communication.", color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "hover:border-fuchsia-400/30 group-hover:shadow-[0_0_15px_rgba(217,70,239,0.15)]" },
  { title: "Maintenance", slug: "/service/maintenance", icon: Settings, description: "Support, mises à jour et supervision de vos systèmes.", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "hover:border-emerald-400/30 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]" },
  { title: "Réseaux", slug: "/service/reseaux", icon: Wifi, description: "Conception, sécurisation et optimisation de vos réseaux.", color: "text-indigo-400", bg: "bg-indigo-500/10", border: "hover:border-indigo-400/30 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.15)]" },
] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Services() {
  return (
    <main className="min-h-screen bg-[#060918] text-gray-100 overflow-hidden">
      {/* Grille de fond */}
      <div className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      {/* Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none z-0 mix-blend-screen" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-fuchsia-600/10 blur-[140px] pointer-events-none z-0 mix-blend-screen" />

      <Navbar />

      <section className="relative px-6 md:px-10 py-24 flex-1 z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
              <Layers className="w-4 h-4" />
              Notre offre complète
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">services</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Découvrez l'ensemble de notre offre pour construire, sécuriser et faire grandir votre présence numérique.
            </p>
          </motion.div>

          {/* Service cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.slug} variants={itemVariants} custom={index}>
                  <Link
                    href={service.slug}
                    className={`group flex flex-col items-center gap-6 text-center bg-[#0c1226] border border-white/5 ${service.border} rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-xl h-full`}
                  >
                    <span className={`rounded-2xl ${service.bg} border border-white/10 h-16 w-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={service.color} size={28} />
                    </span>
                    <div>
                      <h2 className="text-xl font-bold text-white mb-2">{service.title}</h2>
                      <p className={`text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors`}>{service.description}</p>
                    </div>
                    <p className={`${service.color} text-sm font-semibold mt-auto flex items-center gap-1 group-hover:gap-2 transition-all`}>
                      En savoir plus <ArrowRight className="w-4 h-4" />
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}