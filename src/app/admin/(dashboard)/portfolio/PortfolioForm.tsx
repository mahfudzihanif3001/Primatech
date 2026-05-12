"use client";

import { useState } from "react";
import { createPortfolio } from "./actions";

export default function PortfolioForm() {
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error", text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const result = await createPortfolio(formData);

    if (result?.error) {
      setMessage({ type: "error", text: result.error });
    } else {
      setMessage({ type: "success", text: "Portofolio berhasil ditambahkan!" });
      (e.target as HTMLFormElement).reset();
    }
    
    setIsPending(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {message && (
        <div className={`p-3 rounded text-sm ${message.type === "success" ? "bg-green-900/50 text-green-200 border border-green-500/50" : "bg-red-900/50 text-red-200 border border-red-500/50"}`}>
          {message.text}
        </div>
      )}
      
      <div>
        <label className="block text-sm font-medium text-silver mb-1">Judul</label>
        <input
          name="title"
          type="text"
          required
          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-silver focus:outline-none focus:border-amber transition-colors"
          placeholder="Misal: Custom Gear Machining"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-silver mb-1">Deskripsi</label>
        <textarea
          name="description"
          required
          rows={3}
          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-silver focus:outline-none focus:border-amber transition-colors"
          placeholder="Deskripsi pengerjaan..."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-silver mb-1">Gambar Thumbnail (Utama)</label>
        <input
          name="thumbnail"
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          required
          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-400 focus:outline-none focus:border-amber transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-zinc-800 file:text-silver hover:file:bg-zinc-700"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-silver mb-1">Foto Tambahan (Bisa lebih dari 1)</label>
        <input
          name="gallery"
          type="file"
          multiple
          accept="image/png, image/jpeg, image/jpg"
          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-400 focus:outline-none focus:border-amber transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-zinc-800 file:text-silver hover:file:bg-zinc-700"
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full py-2 px-4 bg-amber text-gunmetal font-bold rounded-md hover:bg-orange-500 transition-colors disabled:opacity-50"
      >
        {isPending ? "Mengunggah..." : "Simpan Portofolio"}
      </button>
    </form>
  );
}
