"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "0.01mm", label: "Akurasi" },
  { value: "ISO 9001", label: "Standar Mutu" },
  { value: "50+", label: "Mesin Industri" },
  { value: "Senin-Jumat", label: "08.00–17.00" },
];

export default function Stats() {
  return (
    <section className="py-12 border-y border-zinc-800 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-zinc-800/0 md:divide-zinc-800">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="text-3xl md:text-5xl font-bold text-silver mb-2 font-heading">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-amber uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
