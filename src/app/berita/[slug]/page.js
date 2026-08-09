import { client } from "@/lib/client";
import { newsBySlugQuery } from "@/lib/queries";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsDetail from "@/components/sections/NewsDetail";

export default async function NewsDetailPage({ params }) {
  const { slug } = await params;
  const news = await client.fetch(newsBySlugQuery, {
    slug,
  });

  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[100px]">
        <NewsDetail news={news} />
      </div>
      <Footer />
    </div>
  );
}
