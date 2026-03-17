"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { teamMembers } from "../../data/team";
import { Button } from "../../components/ui/Button";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, Mail, Phone, MapPin, Linkedin, Github, Globe, Instagram } from "lucide-react";
import { use } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) notFound();

  const initials = member.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

  return (
    <main className="min-h-screen bg-[#060918] text-gray-100 flex flex-col overflow-hidden">
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
          className="max-w-5xl mx-auto space-y-10"
        >
          {/* Back Button */}
          <motion.div variants={itemVariants}>
            <Link href="/a-propos">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-indigo-300 gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour à l&apos;équipe
              </Button>
            </Link>
          </motion.div>

          {/* Hero Profile */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-10 items-start bg-[#0c1226] border border-white/5 rounded-3xl p-10 shadow-2xl">
            <div className="shrink-0">
              <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-indigo-500/25 to-purple-600/25 border border-indigo-400/30 flex items-center justify-center text-indigo-200 font-black text-3xl shadow-[0_0_25px_rgba(99,102,241,0.15)]">
                {initials}
              </div>
            </div>

            <div className="flex-1">
              <p className="text-indigo-400 font-semibold mb-2 text-sm uppercase tracking-widest">Membre de l&apos;équipe</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">{member.name}</h1>
              <p className="text-gray-300 font-medium text-lg mb-5">{member.role}</p>
              <p className="text-gray-400 leading-relaxed">{member.bio}</p>

              {member.skills && member.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {member.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Contact & Socials */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="bg-[#0c1226] border border-white/5 rounded-3xl p-8 space-y-4 shadow-xl">
              <h2 className="text-lg font-bold text-white mb-4">Contact</h2>
              {member.email && (
                <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-gray-300 hover:text-indigo-300 transition-colors group">
                  <div className="h-9 w-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium truncate">{member.email}</span>
                </a>
              )}
              {member.phone && (
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="h-9 w-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">{member.phone}</span>
                </div>
              )}
              {member.location && (
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="h-9 w-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">{member.location}</span>
                </div>
              )}
              {!member.email && !member.phone && !member.location && (
                <p className="text-gray-500 text-sm">Aucune information de contact disponible.</p>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="bg-[#0c1226] border border-white/5 rounded-3xl p-8 space-y-4 shadow-xl md:col-span-2">
              <h2 className="text-lg font-bold text-white mb-4">Réseaux & Profils</h2>
              <div className="flex flex-wrap gap-3">
                {member.socials?.linkedin && (
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20 transition text-sm font-medium">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                )}
                {member.socials?.github && (
                  <a href={member.socials.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition text-sm font-medium">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                )}
                {member.socials?.instagram && (
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 hover:bg-fuchsia-500/20 transition text-sm font-medium">
                    <Instagram className="w-4 h-4" /> Instagram
                  </a>
                )}
                {member.socials?.website && (
                  <a href={member.socials.website} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20 transition text-sm font-medium">
                    <Globe className="w-4 h-4" /> Site web
                  </a>
                )}
                {(!member.socials || Object.values(member.socials).filter(Boolean).length === 0) && (
                  <p className="text-gray-500 text-sm">Aucun réseau renseigné.</p>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
