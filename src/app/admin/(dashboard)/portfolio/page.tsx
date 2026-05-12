import { prisma } from "@/lib/prisma";
import { deletePortfolio } from "./actions";
import { Trash2 } from "lucide-react";
import PortfolioForm from "./PortfolioForm";

export default async function AdminPortfolio() {
  const portfolios = await prisma.portfolio.findMany({
    orderBy: { createdAt: "desc" },
    include: { images: true }
  });

  return (
    <div>
      <h1 className="text-3xl font-bold font-heading text-silver mb-8">Kelola Portofolio</h1>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-1">
          <div className="glass-dark border border-zinc-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold text-silver mb-4">Tambah Portofolio</h2>
            <PortfolioForm />
          </div>
        </div>

        <div className="xl:col-span-2">
          <div className="glass-dark border border-zinc-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold text-silver mb-4">Daftar Portofolio ({portfolios.length})</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-zinc-900/50 text-zinc-400">
                  <tr>
                    <th className="px-4 py-3 font-medium rounded-tl-md">Thumbnail</th>
                    <th className="px-4 py-3 font-medium">Detail</th>
                    <th className="px-4 py-3 font-medium">Galeri Tambahan</th>
                    <th className="px-4 py-3 font-medium text-right rounded-tr-md">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {portfolios.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-4 py-8 text-center text-zinc-500">
                        Belum ada portofolio yang ditambahkan.
                      </td>
                    </tr>
                  ) : (
                    portfolios.map((item) => (
                      <tr key={item.id} className="hover:bg-zinc-900/30 transition-colors">
                        <td className="px-4 py-3">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover rounded-md border border-zinc-800" />
                        </td>
                        <td className="px-4 py-3 align-top">
                          <p className="text-silver font-medium mb-1">{item.title}</p>
                          <p className="text-xs text-zinc-500 line-clamp-2 max-w-xs">{item.description}</p>
                        </td>
                        <td className="px-4 py-3 align-top">
                          <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-zinc-800 text-zinc-300">
                            {item.images.length} foto
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right align-top">
                          <form action={async () => { "use server"; await deletePortfolio(item.id); }}>
                            <button type="submit" className="text-red-400 hover:text-red-300 p-2 bg-red-400/10 hover:bg-red-400/20 rounded-md transition-colors" title="Hapus Portofolio">
                              <Trash2 size={16} />
                            </button>
                          </form>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
