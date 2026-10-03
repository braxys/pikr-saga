import { client } from "@/lib/client";
import { newsBySlugQuery } from "@/lib/queries";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsDetail from "@/components/sections/NewsDetail";

export default async function NewsDetailPage({ params }) {
  const { slug } = await params;
  const news = await client.fetch(newsBySlugQuery, {
    slug,
  });

  if (!news) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-[1440px] flex-1 px-5 sm:px-8 lg:px-16">
        <NewsDetail news={news} />
      </main>
      <Footer />
    </div>
  );
}
