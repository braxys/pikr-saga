import { client } from "@/lib/client";
import { newsBySlugQuery } from "@/lib/queries";
import { notFound } from "next/navigation";
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
