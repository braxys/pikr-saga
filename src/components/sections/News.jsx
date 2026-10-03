import { client } from "@/lib/client";
import { allNewsQuery } from "@/lib/queries";
import NewsCarousel from "./NewsCarousel";

export default async function News() {
  const news = await client.fetch(allNewsQuery);

  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Berita Terbaru
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-paragraph/75 sm:text-lg">
          Ikuti cerita, kegiatan, dan informasi terbaru dari PIK-R SAGA.
        </p>
      </div>

      <NewsCarousel news={news} />
    </div>
  );
}
