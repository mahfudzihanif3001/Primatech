"use client";

import { useState, useTransition } from "react";
import { login } from "../actions";
import { Lock, User } from "lucide-react";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await login(formData);
      if (result?.error) {
        setError(result.error);
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gunmetal selection:bg-amber selection:text-gunmetal p-4">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      
      <div className="w-full max-w-md p-8 rounded-2xl glass-dark border border-zinc-800 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold font-heading text-silver mb-2">Admin Panel</h1>
          <p className="text-ash text-sm">CV PRIMATECH SUKSES MANDIRI</p>
        </div>

        {error && (
          <div className="mb-6 p-3 rounded bg-red-900/50 border border-red-500/50 text-red-200 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-silver mb-2">Username</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={18} className="text-zinc-500" />
              </div>
              <input
                name="username"
                type="text"
                required
                className="block w-full pl-10 pr-3 py-3 border border-zinc-800 rounded-md leading-5 bg-zinc-900/50 text-silver placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-amber focus:border-amber transition-colors"
                placeholder="admin"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-silver mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-zinc-500" />
              </div>
              <input
                name="password"
                type="password"
                required
                className="block w-full pl-10 pr-3 py-3 border border-zinc-800 rounded-md leading-5 bg-zinc-900/50 text-silver placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-amber focus:border-amber transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-gunmetal bg-amber hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber disabled:opacity-50 transition-colors"
          >
            {isPending ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
