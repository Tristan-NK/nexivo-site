"use client";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ShieldCheck } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function ConfidentialitePage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <main className="min-h-screen bg-[#060918] text-gray-100 selection:bg-indigo-500/30 overflow-hidden">
      {/* EFFET DE GRILLE PREMIUM */}
      <div className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      {/* CERCLES DE FOND DÉCORATIFS */}
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none z-0 mix-blend-screen" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-fuchsia-600/10 blur-[140px] pointer-events-none z-0 mix-blend-screen" />

      <Navbar />

      <section className="relative pt-32 pb-20 px-6 z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            Légal
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Politique de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Confidentialité
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-16 max-w-2xl">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
          </motion.p>

          <div className="prose prose-invert prose-indigo max-w-none space-y-10">
            {[
              {
                title: "1. Introduction",
                content: "Chez Nexivo, la protection de vos données personnelles est une priorité absolue. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations lorsque vous visitez notre site web ou utilisez nos services."
              },
              {
                title: "2. Données collectées",
                content: (
                  <>
                    <p className="mb-4">Nous pouvons collecter les types d'informations suivants :</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong className="text-white">Informations d'identification :</strong> nom, prénom, adresse e-mail, numéro de téléphone.</li>
                      <li><strong className="text-white">Informations professionnelles :</strong> nom de l'entreprise, poste occupé, détails du projet.</li>
                      <li><strong className="text-white">Données de navigation :</strong> adresse IP, type de navigateur, pages visitées.</li>
                    </ul>
                  </>
                )
              },
              {
                title: "3. Utilisation des données",
                content: (
                  <>
                    <p className="mb-4">Les informations que nous collectons sont utilisées pour :</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Répondre à vos demandes de contact ou de devis.</li>
                      <li>Fournir, maintenir et améliorer nos services web et réseau.</li>
                      <li>Vous informer des mises à jour importantes.</li>
                      <li>Respecter nos obligations légales et réglementaires.</li>
                    </ul>
                  </>
                )
              },
              {
                title: "4. Partage et sécurité",
                content: (
                  <p>Nexivo ne vend, ne loue, ni ne commercialise vos données personnelles à des tiers. Vos données sont stockées sur des serveurs sécurisés. Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles conformes aux standards de l'industrie (Security by design) pour protéger vos informations contre tout accès, altération, divulgation ou destruction non autorisés.</p>
                )
              },
              {
                title: "5. Vos droits",
                content: (
                  <>
                    <p className="mb-4">Conformément à la législation en vigueur au Gabon, vous disposez des droits suivants concernant vos données personnelles :</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                      <li>Droit d'accès, de rectification et d'effacement.</li>
                      <li>Droit à la limitation du traitement.</li>
                      <li>Droit à la portabilité de vos données.</li>
                    </ul>
                    <p>Pour exercer ces droits, veuillez nous contacter à : <a href="mailto:contact@nexivo.fr" className="text-indigo-400 hover:text-indigo-300 transition-colors">contact@nexivo.fr</a>.</p>
                  </>
                )
              }
            ].map((section, index) => (
              <motion.section 
                key={index}
                variants={itemVariants}
                className="bg-[#0c1226]/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm hover:border-indigo-500/20 transition-colors"
              >
                <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                <div className="text-gray-300 leading-relaxed">{section.content}</div>
              </motion.section>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
