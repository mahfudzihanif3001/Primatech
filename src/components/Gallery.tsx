"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Portfolio = {
  id: string;
  title: string;
  imageUrl: string;
};

export default function Gallery({ portfolios }: { portfolios: Portfolio[] }) {
  // Hanya tampilkan 6 portofolio terbaru di halaman utama
  const displayPortfolios = portfolios.slice(0, 6);

  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-heading text-3xl md:text-5xl font-bold text-silver mb-4"
            >
              HASIL <span className="text-cyan">PORTOFOLIO</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-ash max-w-xl text-lg"
            >
              Bukti nyata dari dedikasi kami terhadap detail dan presisi tingkat tinggi.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="/portofolio"
            className="hidden md:inline-flex items-center text-sm font-bold text-amber hover:text-cyan transition-colors uppercase tracking-widest mt-6 md:mt-0"
          >
            Lihat Semua Galeri →
          </motion.a>
        </div>

        {displayPortfolios.length === 0 ? (
          <div className="py-12 text-center text-zinc-500 border border-zinc-800 rounded-xl border-dashed">
            Belum ada portofolio yang ditambahkan.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayPortfolios.map((project, index) => (
              <Link href={`/portofolio/${project.id}`} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 cursor-pointer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gunmetal via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-silver mb-1">{project.title}</h3>
                    <div className="h-1 w-12 bg-amber rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-100"></div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/portofolio" className="inline-block px-6 py-3 border border-zinc-700 rounded-md text-silver hover:bg-zinc-800 transition-colors">
            Lihat Semua Galeri
          </Link>
        </div>
      </div>
    </section>
  );
}
