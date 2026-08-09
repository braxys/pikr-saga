import { client } from "@/lib/client";
import { newsBySlugQuery } from "@/lib/queries";
import { urlFor } from "@/lib/image";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsDetail from "@/components/sections/NewsDetail";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const news = await client.fetch(newsBySlugQuery, {
    slug,
  });

  if (!news) {
    return {
      title: "Berita Tidak Ditemukan | PIK-R SAGA",
    };
  }

  const imageUrl = news.thumbnail
    ? urlFor(news.thumbnail).width(1200).height(630).url()
    : null;

  return {
    title: news.title,

    description: news.excerpt || "Berita terbaru dari PIK-R SAGA.",

    openGraph: {
      title: news.title,
      description: news.excerpt || "Berita terbaru dari PIK-R SAGA.",
      type: "article",
      siteName: "PIK-R SAGA",

      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: news.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: news.title,
      description: news.excerpt || "Berita terbaru dari PIK-R SAGA.",
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

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
