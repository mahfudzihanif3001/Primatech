"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Hexagon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-dark py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden rounded-lg bg-gunmetal border border-zinc-800 group-hover:border-amber transition-colors">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Primatech Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-heading font-bold text-silver leading-tight tracking-wider text-sm sm:text-base">
                CV PRIMATECH
              </span>
              <span className="text-[10px] text-ash tracking-widest leading-none">
                SUKSES MANDIRI
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-sm font-medium text-ash hover:text-cyan transition-colors">
              Layanan
            </Link>
            <Link href="#gallery" className="text-sm font-medium text-ash hover:text-cyan transition-colors">
              Portofolio
            </Link>
            <Link href="#contact" className="text-sm font-medium text-ash hover:text-cyan transition-colors">
              Kontak
            </Link>
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-bold rounded-md bg-transparent border border-amber text-amber hover:bg-amber hover:text-gunmetal transition-all shadow-[0_0_15px_rgba(255,107,0,0.15)] hover:shadow-[0_0_20px_rgba(255,107,0,0.4)]"
            >
              Minta Penawaran
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-silver hover:text-amber transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-dark absolute top-full left-0 w-full border-t border-zinc-800"
        >
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
            <Link
              href="#services"
              className="block px-3 py-2 text-base font-medium text-ash hover:text-cyan"
              onClick={() => setIsOpen(false)}
            >
              Layanan
            </Link>
            <Link
              href="#gallery"
              className="block px-3 py-2 text-base font-medium text-ash hover:text-cyan"
              onClick={() => setIsOpen(false)}
            >
              Portofolio
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-ash hover:text-cyan"
              onClick={() => setIsOpen(false)}
            >
              Kontak
            </Link>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-center text-sm font-bold rounded-md bg-amber text-gunmetal transition-all"
            >
              Minta Penawaran
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
