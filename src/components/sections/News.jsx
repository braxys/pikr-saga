import { client } from "@/lib/client";
import { allNewsQuery } from "@/lib/queries";
import NewsCarousel from "./NewsCarousel";

export default async function News() {
  const news = await client.fetch(allNewsQuery);

  return (
    <div className="flex flex-col gap-[35px]">
      <div className="text-center">
        <h1 className="text-[32px] text-primary font-bold">Berita Terbaru</h1>

        <p>Informasi terbaru mengenai kegiatan PIK-R SAGA.</p>
      </div>

      <NewsCarousel news={news} />
    </div>
  );
}
