"use client";

import { motion } from "framer-motion";
import { Settings, Wrench, Cylinder, Hammer } from "lucide-react";

const services = [
  {
    title: "CNC Turning",
    description: "Proses bubut presisi tinggi dengan mesin CNC modern untuk komponen silindris yang kompleks.",
    icon: <Cylinder size={32} className="text-amber" />,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80",
  },
  {
    title: "Milling",
    description: "Pemotongan material dengan akurasi mikrometer untuk part dengan profil rumit.",
    icon: <Settings size={32} className="text-cyan" />,
    className: "md:col-span-1 md:row-span-1 bg-zinc-900/50",
  },
  {
    title: "Custom Fabrication",
    description: "Fabrikasi logam sesuai spesifikasi custom Anda.",
    icon: <Wrench size={32} className="text-amber" />,
    className: "md:col-span-1 md:row-span-1 bg-zinc-900/50",
  },
  {
    title: "Welding & Assembly",
    description: "Pengelasan presisi dan perakitan komponen siap pakai berkualitas.",
    icon: <Hammer size={32} className="text-cyan" />,
    className: "md:col-span-2 md:row-span-1 bg-gradient-to-r from-zinc-900/50 to-zinc-900/20",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative z-10 bg-gunmetal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-heading text-3xl md:text-5xl font-bold text-silver mb-4"
          >
            LAYANAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-orange-600">UTAMA</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-ash max-w-xl text-lg"
          >
            Keahlian teknis dan peralatan mutakhir untuk memenuhi standar industri terketat.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 auto-rows-[200px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 0.98 }}
              className={`group relative p-8 rounded-2xl border border-zinc-800 overflow-hidden flex flex-col justify-end transition-colors hover:border-zinc-700 ${service.className}`}
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 z-0"></div>
              
              <div className="relative z-10">
                <div className="mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-silver mb-2">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-zinc-800/30 to-transparent rounded-bl-3xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
