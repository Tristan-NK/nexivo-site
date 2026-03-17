"use client";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ShieldCheck } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function ConditionsPage() {
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
            Conditions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Générales
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-16 max-w-2xl">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
          </motion.p>

          <div className="prose prose-invert prose-indigo max-w-none space-y-10">
            {[
              {
                title: "1. Mentions légales",
                content: (
                  <>
                    <p className="mb-4">
                      Le site internet <strong className="text-white">Nexivo</strong> est édité par Nexivo SAS, société au capital de 10 000€, immatriculée au Registre du Commerce et des Sociétés sous le numéro [Numéro SIRET], dont le siège social est situé à [Adresse de l'entreprise].
                    </p>
                    <p>
                      Le directeur de la publication est [Nom du Directeur]. Contact : <a href="mailto:contact@nexivo.fr" className="text-indigo-400 hover:text-indigo-300 transition-colors">contact@nexivo.fr</a>. L'hébergement du site est assuré par [Nom de l'hébergeur, ex: Vercel Inc., 340 S Lemon Ave #4133 Walnut, CA 91789, USA].
                    </p>
                  </>
                )
              },
              {
                title: "2. Objet et acceptation",
                content: (
                  <>
                    <p className="mb-4">
                      Les présentes Conditions Générales (CGU / CGV) ont pour objet de définir les modalités de mise à disposition des services du site Nexivo.fr et les conditions générales de vente des prestations de services (développement web, design, maintenance, infogérance) proposées par Nexivo.
                    </p>
                    <p>
                      La commande d'une prestation auprès de Nexivo implique l'acceptation sans réserve par l'Acheteur des présentes conditions générales.
                    </p>
                  </>
                )
              },
              {
                title: "3. Prestations et devis",
                content: "Nexivo propose ses prestations sur la base d'un devis préalable, gratuit et sans engagement, valable pendant une durée de 30 jours. Le contrat est considéré comme conclu dès réception du devis signé par le client, accompagné de la mention \"Bon pour accord\" et du versement de l'acompte défini dans le devis (généralement 30% à 50% du montant total)."
              },
              {
                title: "4. Délais et responsabilité",
                content: (
                  <>
                    <p className="mb-4">
                      Nexivo s'engage à mener à bien la mission qui lui est confiée conformément aux spécifications définies avec le client. Les délais de livraison sont donnés à titre indicatif. Nexivo ne pourra être tenu responsable des retards occasionnés par le client (retard dans la fourniture des contenus, validations, etc.) ou par des cas de force majeure.
                    </p>
                    <p>Nexivo est tenu à une obligation de moyens et non de résultats, sauf accord contractuel spécifique.</p>
                  </>
                )
              },
              {
                title: "5. Propriété intellectuelle",
                content: (
                  <>
                    <p className="mb-4">
                      Tous les éléments fournis par le client à Nexivo pour l'exécution de la mission (textes, images, logos) restent la propriété du client et sous sa responsabilité quant aux droits d'auteur.
                    </p>
                    <p>
                      Nexivo cède au client les droits d'exploitation de la création numérique à compter du règlement intégral des sommes dues. Nexivo se réserve le droit de mentionner les réalisations effectuées pour le client comme référence dans le cadre de ses démarches prospectives et publicitaires.
                    </p>
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
