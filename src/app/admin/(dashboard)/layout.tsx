import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, LogOut, FileImage, MessageSquareQuote } from "lucide-react";
import { logout } from "../actions";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // If not authenticated and trying to access anything other than login, redirect
  // (Middleware handles this mostly, but good for double-check)
  
  return (
    <div className="min-h-screen bg-gunmetal text-silver flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 bg-zinc-950 flex flex-col">
        <div className="p-6 border-b border-zinc-800">
          <h2 className="text-xl font-bold font-heading text-amber">Admin Panel</h2>
          <p className="text-xs text-ash mt-1">Primatech Sukses Mandiri</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-zinc-900 transition-colors text-sm font-medium">
            <LayoutDashboard size={18} className="text-cyan" />
            Dashboard
          </Link>
          <Link href="/admin/portfolio" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-zinc-900 transition-colors text-sm font-medium">
            <FileImage size={18} className="text-amber" />
            Kelola Portofolio
          </Link>
          <Link href="/admin/reviews" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-zinc-900 transition-colors text-sm font-medium">
            <MessageSquareQuote size={18} className="text-cyan" />
            Kelola Review
          </Link>
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <form action={logout}>
            <button type="submit" className="flex w-full items-center gap-3 px-4 py-3 rounded-md text-red-400 hover:bg-zinc-900 transition-colors text-sm font-medium">
              <LogOut size={18} />
              Logout
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-gunmetal relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
        <div className="relative z-10 p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
