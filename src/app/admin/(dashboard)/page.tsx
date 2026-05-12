import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const portfolioCount = await prisma.portfolio.count();
  const reviewCount = await prisma.review.count();

  return (
    <div>
      <h1 className="text-3xl font-bold font-heading text-silver mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-dark border border-zinc-800 p-6 rounded-xl">
          <h3 className="text-zinc-400 font-medium mb-2">Total Portofolio</h3>
          <p className="text-4xl font-bold text-amber">{portfolioCount}</p>
        </div>
        
        <div className="glass-dark border border-zinc-800 p-6 rounded-xl">
          <h3 className="text-zinc-400 font-medium mb-2">Total Review</h3>
          <p className="text-4xl font-bold text-cyan">{reviewCount}</p>
        </div>
      </div>
    </div>
  );
}
