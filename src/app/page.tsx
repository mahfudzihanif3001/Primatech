import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default async function Home() {
  const reviews = await prisma.review.findMany({
    orderBy: { createdAt: "desc" },
    take: 6,
  });

  const portfolios = await prisma.portfolio.findMany({
    orderBy: { createdAt: "desc" },
    take: 6,
  });

  return (
    <main className="min-h-screen bg-gunmetal selection:bg-amber selection:text-gunmetal">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Gallery portfolios={portfolios} />
      <Reviews reviews={reviews} />
      <Footer />
    </main>
  );
}
