"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Overlay & Noise */}
      <div className="absolute inset-0 z-0 bg-gunmetal">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-gunmetal/80 to-gunmetal/90"></div>
        
        {/* Abstract Glows representing sparks/laser */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-[120px] mix-blend-screen" />
        
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
          <span className="text-xs font-medium text-ash uppercase tracking-wider">Beroperasi 08.00 - 17.00</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-silver mb-6"
        >
          PRESISI <span className="text-amber">TINGGI.</span><br />
          KUALITAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-500">INDUSTRI.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-ash mb-10 leading-relaxed"
        >
          Solusi fabrikasi dan permesinan kelas atas dengan toleransi ketat. 
          Membentuk logam menjadi mahakarya fungsional untuk kebutuhan industri Anda.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gunmetal bg-amber rounded-md overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,107,0,0.3)]"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <span className="relative flex items-center gap-2">
              Hubungi Kami <ChevronRight size={18} />
            </span>
          </a>
          
          <a
            href="#gallery"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-silver bg-transparent border border-zinc-700 rounded-md hover:bg-zinc-800 transition-all"
          >
            Lihat Portofolio
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-zinc-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
