import { prisma } from "@/lib/prisma";
import { createReview, deleteReview } from "./actions";
import { Trash2, Star } from "lucide-react";

export default async function AdminReviews() {
  const reviews = await prisma.review.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold font-heading text-silver mb-8">Kelola Review Pelanggan</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="glass-dark border border-zinc-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold text-silver mb-4">Tambah Review</h2>
            <form action={async (formData) => { "use server"; await createReview(formData); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-silver mb-1">Nama Pelanggan</label>
                <input
                  name="customerName"
                  type="text"
                  required
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-silver focus:outline-none focus:border-amber transition-colors"
                  placeholder="Misal: Budi Santoso"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-silver mb-1">Perusahaan (Opsional)</label>
                <input
                  name="company"
                  type="text"
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-silver focus:outline-none focus:border-amber transition-colors"
                  placeholder="Misal: PT Teknologi Cemerlang"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-silver mb-1">Isi Review</label>
                <textarea
                  name="content"
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-silver focus:outline-none focus:border-amber transition-colors"
                  placeholder="Review positif pelanggan..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-silver mb-1">Rating (1-5)</label>
                <select
                  name="rating"
                  required
                  defaultValue="5"
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-silver focus:outline-none focus:border-amber transition-colors"
                >
                  <option value="5">5 Bintang</option>
                  <option value="4">4 Bintang</option>
                  <option value="3">3 Bintang</option>
                  <option value="2">2 Bintang</option>
                  <option value="1">1 Bintang</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-amber text-gunmetal font-bold rounded-md hover:bg-orange-500 transition-colors"
              >
                Simpan
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="glass-dark border border-zinc-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold text-silver mb-4">Daftar Review ({reviews.length})</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-zinc-900/50 text-zinc-400">
                  <tr>
                    <th className="px-4 py-3 font-medium rounded-tl-md">Nama</th>
                    <th className="px-4 py-3 font-medium">Review & Rating</th>
                    <th className="px-4 py-3 font-medium text-right rounded-tr-md">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {reviews.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="px-4 py-8 text-center text-zinc-500">
                        Belum ada review yang ditambahkan.
                      </td>
                    </tr>
                  ) : (
                    reviews.map((item) => (
                      <tr key={item.id} className="hover:bg-zinc-900/30 transition-colors">
                        <td className="px-4 py-3 align-top">
                          <p className="text-silver font-medium">{item.customerName}</p>
                          {item.company && <p className="text-xs text-zinc-500">{item.company}</p>}
                        </td>
                        <td className="px-4 py-3 align-top max-w-xs">
                          <div className="flex gap-1 mb-1">
                            {Array.from({ length: item.rating }).map((_, i) => (
                              <Star key={i} size={14} className="fill-amber text-amber" />
                            ))}
                          </div>
                          <p className="text-zinc-400 text-xs line-clamp-2">{item.content}</p>
                        </td>
                        <td className="px-4 py-3 text-right align-top">
                          <form action={async () => { "use server"; await deleteReview(item.id); }}>
                            <button type="submit" className="text-red-400 hover:text-red-300 p-2 bg-red-400/10 hover:bg-red-400/20 rounded-md transition-colors">
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
