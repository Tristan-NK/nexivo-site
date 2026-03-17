"use client";

import Link from "next/link";
import { Footer } from "./components/Footer";
import { Button } from "./components/ui/Button";
import { Hint, Input, Label, Select, Textarea } from "./components/ui/Fields";
import { motion, Variants } from "framer-motion";
import { Code, PenTool, Server, ArrowRight, CheckCircle, ShieldCheck, Sparkles, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    const fd = new FormData(e.currentTarget);
    const data = {
      name: fd.get("contact_name"),
      email: fd.get("contact_email"),
      type: fd.get("contact_type"),
      budget: fd.get("contact_budget"),
      description: fd.get("contact_desc"),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok) {
        setFormState("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setErrorMsg(json.error || "Une erreur est survenue.");
        setFormState("error");
      }
    } catch {
      setErrorMsg("Impossible d'envoyer le message. Vérifiez votre connexion.");
      setFormState("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#060918] text-gray-100 selection:bg-indigo-500/30 overflow-hidden">
      {/* EFFET DE GRILLE PREMIUM */}
      <div className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      {/* CERCLES DE FOND DÉCORATIFS (Glow effect) - PLUS DE COULEUR */}
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/20 blur-[140px] pointer-events-none z-0 mix-blend-screen" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-fuchsia-600/20 blur-[140px] pointer-events-none z-0 mix-blend-screen" />
      <div className="fixed top-[40%] left-[20%] w-[40%] h-[40%] rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none z-0 mix-blend-screen" />

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-6 md:px-12 py-5 border-b border-indigo-500/10 sticky top-0 z-50 backdrop-blur-2xl bg-[#060918]/60 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="relative flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25 border border-white/10">
            <span className="text-2xl font-black text-white tracking-tighter">N</span>
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 tracking-tight">Nexivo</h1>
        </motion.div>

        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-8 text-gray-300 text-[15px] font-medium"
        >
          <a href="#services" className="hover:text-indigo-400 transition-colors duration-300">Services</a>
          <a href="#about" className="hover:text-indigo-400 transition-colors duration-300">À propos</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors duration-300">Contact</a>
          <Link
            href="/service"
            className="group relative inline-flex items-center justify-center bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 px-5 py-2.5 rounded-xl text-indigo-300 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 font-semibold">
              Tous nos services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.nav>
      </header>

      {/* HERO */}
      <section className="relative text-center py-32 px-6 flex flex-col items-center justify-center min-h-[85vh] z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            Startup technologique gabonaise
          </motion.div>
          
          <motion.h2 
            variants={fadeUp}
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-8"
          >
            Construisons le futur<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400">
              numérique
            </span>{" "}
            de votre entreprise
          </motion.h2>

          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Nexivo conçoit des sites web, applications et plateformes sur-mesure
            pour vous aider à gagner en <span className="text-white font-semibold">visibilité</span>,
            en <span className="text-white font-semibold">productivité</span> et en <span className="text-white font-semibold">efficacité</span>.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-5 w-full md:w-auto">
            <a
              href="#contact"
              className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)] hover:shadow-[0_0_60px_-15px_rgba(99,102,241,0.8)] w-full md:w-auto border border-white/10"
            >
              Démarrer un projet
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-xl font-semibold text-gray-200 transition-all backdrop-blur-sm w-full md:w-auto shadow-lg"
            >
              Découvrir nos services
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-32 px-6 md:px-10 z-10 border-t border-white/5 bg-[#080b1e]/50 backdrop-blur-sm">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Notre expertise
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Une offre complète pour propulser votre activité. De la présence en ligne à l'infrastructure réseau.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div 
              variants={fadeUp}
              className="group relative bg-gradient-to-b from-[#0c1226] to-[#080b1e] hover:from-[#111936] hover:to-[#0c1226] p-10 rounded-3xl border border-indigo-500/10 hover:border-indigo-400/30 transition-all duration-300 overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                <Code size={120} className="text-cyan-400" />
              </div>
              <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <Code className="text-cyan-400 w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">Développement web & apps</h4>
              <p className="text-gray-400 group-hover:text-gray-300 mb-8 leading-relaxed transition-colors">
                Sites vitrines, plateformes e-commerce et applications web sur-mesure. Performantes, sécurisées et éco-conçues.
              </p>
              <Link href="/service/developpement" className="inline-flex items-center text-cyan-400 font-semibold group/link">
                En savoir plus
                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              variants={fadeUp}
              className="group relative bg-gradient-to-b from-[#0c1226] to-[#080b1e] hover:from-[#111936] hover:to-[#0c1226] p-10 rounded-3xl border border-fuchsia-500/10 hover:border-fuchsia-400/30 transition-all duration-300 overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                <PenTool size={120} className="text-fuchsia-400" />
              </div>
              <div className="h-14 w-14 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(217,70,239,0.15)]">
                <PenTool className="text-fuchsia-400 w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">Branding & UI/UX</h4>
              <p className="text-gray-400 group-hover:text-gray-300 mb-8 leading-relaxed transition-colors">
                Logos, chartes graphiques, et design d'interfaces. Nous créons des identités visuelles mémorables qui convertissent.
              </p>
              <Link href="/service/infographie" className="inline-flex items-center text-fuchsia-400 font-semibold group/link">
                En savoir plus
                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              variants={fadeUp}
              className="group relative bg-gradient-to-b from-[#0c1226] to-[#080b1e] hover:from-[#111936] hover:to-[#0c1226] p-10 rounded-3xl border border-emerald-500/10 hover:border-emerald-400/30 transition-all duration-300 overflow-hidden shadow-xl"
            >
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                <Server size={120} className="text-emerald-400" />
              </div>
              <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <Server className="text-emerald-400 w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">Maintenance & Réseaux</h4>
              <p className="text-gray-400 group-hover:text-gray-300 mb-8 leading-relaxed transition-colors">
                Supervision 24/7, mises à jour de sécurité de vos infrastructures, gestion de parc informatique et infogérance.
              </p>
              <div className="flex gap-6">
                <Link href="/service/maintenance" className="inline-flex items-center text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">
                  Maintenance
                </Link>
                <Link href="/service/reseaux" className="inline-flex items-center text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">
                  Réseaux
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* À PROPOS */}
      <section id="about" className="relative py-32 px-6 md:px-10 z-10 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-transparent pointer-events-none" />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto relative"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Le partenaire de votre croissance</h3>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Nexivo est une startup technologique qui accompagne les entreprises dans leur transformation numérique. Nous combinons expertise technique rigoureuse, design avant-gardiste et compréhension intime de vos enjeux métiers.
                </p>
                <p>
                  Nous refusons les solutions génériques. Chaque ligne de code, chaque pixel et chaque configuration réseau est pensé pour apporter une véritable valeur ajoutée à votre organisation.
                </p>
              </div>
              
              <ul className="space-y-4 pt-4">
                {[
                  "Développement 100% sur-mesure",
                  "Accompagnement de A à Z",
                  "Technologies de pointe (React, Next.js)"
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    custom={i}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: i => ({ opacity: 1, x: 0, transition: { delay: i * 0.1 } })
                    }}
                    className="flex items-center gap-3 text-gray-200 font-medium"
                  >
                    <CheckCircle className="text-indigo-400 w-5 h-5 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="pt-6">
                <Link
                  href="/a-propos"
                  className="inline-flex items-center gap-2 border border-indigo-500/20 hover:border-indigo-400/40 bg-indigo-500/10 hover:bg-indigo-500/20 px-6 py-3 rounded-xl font-semibold text-white transition-all backdrop-blur-sm"
                >
                  Découvrir notre équipe
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeUp}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 pt-12">
                <div className="bg-gradient-to-br from-indigo-900/40 to-[#0c1226] border border-indigo-500/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
                  <div className="text-5xl font-black text-white mb-2 tracking-tighter text-shadow-sm">+10</div>
                  <div className="text-indigo-300 font-medium mb-1">Projets digitaux</div>
                  <div className="text-sm text-gray-400">Livrés et en production</div>
                </div>
                <div className="bg-[#0c1226] border border-white/5 rounded-3xl p-8 shadow-2xl hover:border-emerald-500/20 transition-colors duration-300">
                  <div className="text-5xl font-black text-white mb-2 tracking-tighter text-shadow-sm">24/7</div>
                  <div className="text-emerald-400 font-medium mb-1">Infogérance</div>
                  <div className="text-sm text-gray-400">Surveillance continue</div>
                </div>
              </div>
              <div className="space-y-4">
                 <div className="bg-[#0c1226] border border-white/5 rounded-3xl p-8 shadow-2xl hover:border-fuchsia-500/20 transition-colors duration-300">
                  <div className="text-5xl font-black text-white mb-2 tracking-tighter text-shadow-sm">100<span className="text-3xl">%</span></div>
                  <div className="text-fuchsia-400 font-medium mb-1">Satisfaction</div>
                  <div className="text-sm text-gray-400">Clients accompagnés</div>
                </div>
                <div className="bg-gradient-to-tr from-[#111936] to-[#0c1226] border border-white/5 rounded-3xl p-8 shadow-2xl">
                  <ShieldCheck className="w-12 h-12 text-cyan-400 mb-6 opacity-90 drop-shadow-md" />
                  <div className="text-xl font-bold text-white mb-1">Sécurité</div>
                  <div className="text-sm text-gray-400 leading-relaxed">Conception 'Security by design' de bout en bout.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-32 px-6 md:px-10 z-10 border-t border-white/5 bg-gradient-to-t from-[#060918] via-[#090d24] to-[#060918]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <motion.div variants={fadeUp} className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                  Discutons de votre projet
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Qu'il s'agisse d'une refonte complète, de la création d'une application métier ou d'un besoin d'infogérance, notre équipe est prête à échanger.
                </p>
              </div>

              <div className="bg-indigo-950/10 border border-indigo-500/10 rounded-3xl p-8 space-y-6 backdrop-blur-xl shadow-xl">
                <h4 className="text-xl font-semibold text-white">Contact direct</h4>
                <ul className="space-y-5">
                  <li>
                    <a href="mailto:contact@nexivo.ga" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                      <div className="h-12 w-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 group-hover:border-indigo-400/50 group-hover:text-indigo-300 transition-all text-indigo-400">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      </div>
                      <div>
                        <div className="text-sm text-indigo-300/70 block font-medium">Email</div>
                        <div className="font-semibold tracking-wide">contact@nexivo.ga</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center gap-4 text-gray-300 group">
                      <div className="h-12 w-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      </div>
                      <div>
                        <div className="text-sm text-indigo-300/70 block font-medium">Téléphone</div>
                        <div className="font-semibold tracking-wide">+241 00 00 00 00</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-[#0c1226] border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />
                
                <div className="grid md:grid-cols-2 gap-6 mb-6 relative z-10">
                  <div className="space-y-2">
                    <Label htmlFor="contact_name" className="text-gray-200">Nom / Société</Label>
                    <Input
                       id="contact_name"
                       name="contact_name"
                       type="text"
                       placeholder="Ex: Entreprise Dupont"
                       autoComplete="organization"
                       required
                       className="bg-[#080b1e] border-white/10 focus:border-indigo-500/50 rounded-xl"
                     />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact_email" className="text-gray-200">Email professionnel</Label>
                    <Input
                       id="contact_email"
                       name="contact_email"
                       type="email"
                       placeholder="jean@entreprise.com"
                       autoComplete="email"
                       required
                       className="bg-[#080b1e] border-white/10 focus:border-indigo-500/50 rounded-xl"
                     />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6 relative z-10">
                  <div className="space-y-2">
                    <Label htmlFor="contact_type" className="text-gray-200">Besoin principal</Label>
                    <Select id="contact_type" name="contact_type" defaultValue="" className="bg-[#080b1e] border-white/10 focus:border-indigo-500/50 rounded-xl">
                      <option value="" disabled>Sélectionnez un domaine</option>
                      <option value="site-web">Création de site web</option>
                      <option value="application">Application Web / Mobile</option>
                      <option value="infographie">Design / Identité visuelle</option>
                      <option value="maintenance">Infogérance / Réseau</option>
                      <option value="autre">Autre besoin</option>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact_budget" className="text-gray-200">Budget estimé</Label>
                    <Select id="contact_budget" name="contact_budget" defaultValue="" className="bg-[#080b1e] border-white/10 focus:border-indigo-500/50 rounded-xl">
                      <option value="" disabled>Fourchette budgétaire</option>
                      <option value="moins-1000">&lt; 2 000 €</option>
                      <option value="1000-3000">2 000 € – 5 000 €</option>
                      <option value="3000-8000">5 000 € – 15 000 €</option>
                      <option value="plus-8000">+ 15 000 €</option>
                    </Select>
                  </div>
                </div>

                <div className="mb-8 relative z-10 space-y-2">
                  <Label htmlFor="contact_desc" className="text-gray-200">Détails du projet</Label>
                  <Textarea
                     id="contact_desc"
                     name="contact_desc"
                     placeholder="Décrivez vos objectifs globaux, le public cible, les délais..."
                     required
                     className="bg-[#080b1e] border-white/10 focus:border-indigo-500/50 rounded-xl min-h-[150px] resize-y"
                   />
                  <Hint className="text-gray-400">
                    Plus vous serez précis, plus notre proposition sera affinée dès le premier échange.
                  </Hint>
                </div>

                {formState === "success" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 mb-6 flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded-xl px-5 py-4 font-medium text-sm">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                  </motion.div>
                )}
                {formState === "error" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 mb-6 bg-red-500/10 border border-red-500/30 text-red-300 rounded-xl px-5 py-4 font-medium text-sm">
                    {errorMsg}
                  </motion.div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
                  <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
                    En soumettant ce formulaire, vous acceptez d'être recontacté et convenez de notre <Link href="/confidentialite" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">politique de confidentialité</Link>.
                  </p>
                  <Button type="submit" disabled={formState === "loading"} className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl py-4 px-8 shadow-[0_0_30px_-5px_rgba(99,102,241,0.5)] font-bold text-md border border-white/10 disabled:opacity-60 disabled:cursor-not-allowed">
                    {formState === "loading" ? (
                      <span className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Envoi en cours...</span>
                    ) : "Envoyer ma demande"}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      {/* FOOTER */}
      <Footer />
    </main>
  );
}