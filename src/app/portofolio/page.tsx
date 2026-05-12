import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function PublicPortfolioPage() {
  const portfolios = await prisma.portfolio.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-gunmetal selection:bg-amber selection:text-gunmetal flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-heading text-4xl md:text-6xl font-bold text-silver mb-6">
              GALERI <span className="text-amber">PORTOFOLIO</span>
            </h1>
            <p className="text-ash max-w-2xl mx-auto text-lg">
              Koleksi hasil karya permesinan presisi tinggi dan fabrikasi industri. Setiap komponen adalah bukti dedikasi kami pada kualitas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {portfolios.length === 0 ? (
              <div className="col-span-full py-20 text-center text-zinc-500">
                Belum ada portofolio yang dipublikasikan.
              </div>
            ) : (
              portfolios.map((project) => (
                <Link href={`/portofolio/${project.id}`} key={project.id} className="group glass-dark border border-zinc-800 rounded-2xl overflow-hidden flex flex-col transition-all hover:border-zinc-600 cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden bg-zinc-900 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 z-10" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 relative z-20">
                    <h3 className="text-2xl font-bold font-heading text-silver mb-2">{project.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                    <div className="flex items-center gap-2 mt-6">
                      <span className="text-amber text-sm font-bold tracking-wider">LIHAT DETAIL</span>
                      <div className="h-[2px] w-8 bg-amber transform origin-left transition-transform duration-300 group-hover:w-12"></div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
