"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

type Review = {
  id: string;
  customerName: string;
  company: string | null;
  content: string;
  rating: number;
};

export default function Reviews({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) return null;

  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950 border-t border-zinc-900">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-heading text-3xl md:text-5xl font-bold text-silver mb-4"
          >
            REVIEW <span className="text-cyan">KLIEN</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-ash max-w-2xl mx-auto text-lg"
          >
            Kepercayaan industri adalah modal utama kami.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark border border-zinc-800 p-8 rounded-2xl relative group hover:border-zinc-700 transition-colors"
            >
              <Quote className="absolute top-6 right-6 text-zinc-800 w-12 h-12 rotate-12 group-hover:text-zinc-700 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-amber text-amber" />
                ))}
              </div>
              
              <p className="text-zinc-300 mb-8 relative z-10 leading-relaxed italic">
                &quot;{review.content}&quot;
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gunmetal border border-zinc-700 flex items-center justify-center font-bold text-amber">
                  {review.customerName.charAt(0)}
                </div>
                <div>
                  <h4 className="text-silver font-medium text-sm">{review.customerName}</h4>
                  {review.company && (
                    <p className="text-xs text-zinc-500">{review.company}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
