import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const portfolio = await prisma.portfolio.findUnique({
    where: { id },
    include: { images: true }
  });

  if (!portfolio) {
    notFound();
  }

  // Gabungkan thumbnail dengan gambar tambahan untuk ditampilkan di grid
  const allImages = [
    { id: "thumb", url: portfolio.imageUrl },
    ...portfolio.images
  ];

  return (
    <main className="min-h-screen bg-gunmetal selection:bg-amber selection:text-gunmetal flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link href="/portofolio" className="inline-flex items-center gap-2 text-zinc-400 hover:text-amber transition-colors mb-8 font-medium">
            <ArrowLeft size={18} /> Kembali ke Galeri
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Info Section */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <h1 className="text-3xl md:text-5xl font-bold font-heading text-silver mb-6">
                {portfolio.title}
              </h1>
              
              <div className="glass-dark border border-zinc-800 p-6 rounded-2xl">
                <h3 className="text-amber font-bold tracking-wider text-sm mb-4">DESKRIPSI PROYEK</h3>
                <div className="prose prose-invert prose-zinc max-w-none">
                  <p className="text-zinc-300 leading-relaxed whitespace-pre-wrap">
                    {portfolio.description}
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-zinc-800">
                  <p className="text-xs text-zinc-500">Ditambahkan pada:</p>
                  <p className="text-sm text-silver font-medium mt-1">
                    {new Date(portfolio.createdAt).toLocaleDateString("id-ID", {
                      day: "numeric", month: "long", year: "numeric"
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="lg:col-span-8 space-y-6">
              {allImages.map((img, index) => (
                <div key={img.id} className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={img.url} 
                    alt={`${portfolio.title} - Foto ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
