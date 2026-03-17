"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="flex justify-between items-center px-6 md:px-12 py-5 border-b border-indigo-500/10 sticky top-0 z-50 backdrop-blur-2xl bg-[#060918]/80 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-3"
      >
        <div className="relative flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25 border border-white/10">
          <span className="text-2xl font-black text-white tracking-tighter">N</span>
        </div>
        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 tracking-tight">
          Nexivo
        </Link>
      </motion.div>

      <motion.nav 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="hidden md:flex items-center space-x-8 text-gray-300 text-[15px] font-medium"
      >
        <Link href="/#services" className="hover:text-indigo-400 transition-colors duration-300">
          Services
        </Link>
        <Link href="/a-propos" className="hover:text-indigo-400 transition-colors duration-300">
          À propos
        </Link>
        <Link href="/#contact" className="hover:text-indigo-400 transition-colors duration-300">
          Contact
        </Link>
        <Link
          href="/service"
          className="group relative inline-flex items-center justify-center bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 px-5 py-2.5 rounded-xl text-indigo-300 transition-all duration-300 overflow-hidden shadow-[0_0_15px_-3px_rgba(99,102,241,0.3)]"
        >
          <span className="relative z-10 flex items-center gap-2 font-semibold">
            Tous nos services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </motion.nav>
    </motion.header>
  );
}
