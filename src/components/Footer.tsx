"use client";

import { MapPin, Phone, Clock, Mail, Globe, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Info Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold font-heading text-silver mb-2">
                CV PRIMATECH
              </h2>
              <p className="text-sm text-amber tracking-widest uppercase">Sukses Mandiri</p>
            </div>
            
            <p className="text-ash mb-10 max-w-md leading-relaxed">
              Mitra terpercaya untuk fabrikasi presisi tinggi, CNC machining, dan solusi permesinan industrial dengan pengalaman bertahun-tahun.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-zinc-900 rounded border border-zinc-800">
                  <MapPin size={20} className="text-cyan" />
                </div>
                <div>
                  <h4 className="text-silver font-medium mb-1">Alamat Bengkel</h4>
                  <p className="text-zinc-400 text-sm">
                    Jl. Perum Graha Prima No.371, Satriajaya,<br />
                    Kec. Tambun Utara, Kabupaten Bekasi,<br />
                    Jawa Barat 17510
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-zinc-900 rounded border border-zinc-800">
                  <Phone size={20} className="text-amber" />
                </div>
                <div>
                  <h4 className="text-silver font-medium mb-1">Telepon & WhatsApp</h4>
                  <p className="text-zinc-400 text-sm">0812-8501-348</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-zinc-900 rounded border border-zinc-800">
                  <Clock size={20} className="text-cyan" />
                </div>
                <div>
                  <h4 className="text-silver font-medium mb-1">Jam Operasional</h4>
                  <p className="text-zinc-400 text-sm">Senin - Jumat: 08.00–17.00<br />Sabtu - Minggu: Tutup</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-bold text-silver mb-6 font-heading flex items-center gap-2">
              <MapPin className="text-amber" /> Lokasi Kami
            </h3>
            <div className="flex-grow w-full h-[300px] lg:h-auto rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 relative group">
              <div className="absolute inset-0 bg-gunmetal/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5293237191637!2d107.0396000747504!3d-6.193665393793617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69894e6bf4c6e7%3A0x6d3d4bb4bd822c67!2sCV.%20PRIMATECH%20SUKSES%20MANDIRI!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(80%) contrast(1.2)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} CV Primatech Sukses Mandiri. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-cyan hover:bg-zinc-800 transition-colors">
              <Globe size={18} />
            </a>
            <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-cyan hover:bg-zinc-800 transition-colors">
              <MessageSquare size={18} />
            </a>
            <a href="mailto:info@primatech.com" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-cyan hover:bg-zinc-800 transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
