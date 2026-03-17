"use client";

import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { teamMembers } from "../data/team";
import { Button } from "../components/ui/Button";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function AProposPage() {
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
          className="max-w-6xl mx-auto space-y-24"
        >
          {/* Header */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <Users className="w-4 h-4" />
                Notre histoire
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                À propos de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Nexivo</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed text-lg">
                Nexivo est une startup technologique qui accompagne les TPE, PME et entrepreneurs dans leur transformation numérique. Nous combinons expertise technique, design et compréhension métier pour créer des solutions utiles et durables.
              </motion.p>
              <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed">
                Nous travaillons en proximité avec nos clients, depuis la définition du besoin jusqu'au déploiement et à la maintenance, pour garantir des résultats concrets et mesurables.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link href="/#contact">
                  <Button variant="secondary" size="sm" className="border-indigo-500/20 text-indigo-300 hover:text-white hover:border-indigo-400/40 bg-indigo-500/10 hover:bg-indigo-500/20">
                    Nous contacter <ArrowRight className="w-4 h-4 ml-1 inline" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 text-sm">
              {[
                { value: "+10", label: "Projets digitaux livrés", color: "text-indigo-400", border: "hover:border-indigo-500/30" },
                { value: "100%", label: "Clients satisfaits", color: "text-fuchsia-400", border: "hover:border-fuchsia-500/30" },
                { value: "24/7", label: "Support & maintenance", color: "text-emerald-400", border: "hover:border-emerald-500/30" },
                { value: "+5", label: "Années d'expérience cumulée", color: "text-cyan-400", border: "hover:border-cyan-500/30" },
              ].map((stat) => (
                <div key={stat.value} className={`bg-[#0c1226] border border-white/5 ${stat.border} rounded-2xl p-6 transition-all duration-300`}>
                  <p className={`text-3xl font-black mb-1 ${stat.color} tracking-tight`}>{stat.value}</p>
                  <p className="text-gray-400 text-sm leading-snug">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Équipe */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-12"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">L&apos;équipe Nexivo</h2>
              <p className="text-gray-400 text-lg">Des experts passionnés à votre service.</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((m, index) => (
                <motion.div key={m.slug} variants={itemVariants} custom={index}>
                  <Link
                    href={`/equipe/${m.slug}`}
                    className="group block bg-[#0c1226] border border-white/5 hover:border-indigo-500/30 rounded-3xl p-8 text-center hover:-translate-y-1 transition-all duration-300 shadow-xl"
                  >
                    <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border border-indigo-500/30 mx-auto mb-6 flex items-center justify-center text-indigo-300 font-black text-xl group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]">
                      {m.name.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase()).join("")}
                    </div>
                    <p className="font-bold text-white text-lg mb-1">{m.name}</p>
                    <p className="text-sm text-indigo-400 font-medium mb-3">{m.role}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{m.shortBio}</p>
                    <p className="text-indigo-400 text-sm font-semibold mt-5 flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                      Voir le profil <ArrowRight className="w-4 h-4" />
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
