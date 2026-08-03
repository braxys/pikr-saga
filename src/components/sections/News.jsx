"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import { useRef } from "react";

import NewsCard from "../ui/NewsCard";

export default function News() {
  const swiperRef = useRef(null);

  const news = [
    {
      id: 1,
      image: "/images/news/news1.png",
      title: "Sosialisasi Bahaya Bullying di Kelas X",
      description:
        "Membangun kesadaran siswa akan dampak negatif perundungan dan cara mencipatakan lingkungan kelas yang harmonis.",
      link: "#",
    },
    {
      id: 2,
      image: "/images/news/news2.png",
      title: "Workshop Konselor Sebaya 2026",
      description:
        "Pelatihan intensif bagi anggota baru PIK-R SAGA untuk meningkatkan keterampilan mendengarkan dan empati.",
      link: "#",
    },
    {
      id: 3,
      image: "/images/news/news3.png",
      title: "Pentingnya Menjaga Kesehatan",
      description:
        "Informasi komprehensif mengenai kesehatan remaja untuk masa depan yang lebih terencana.",
      link: "#",
    },
    {
      id: 4,
      image: "/images/news/news4.jpeg",
      title: "Pentingnya Menjaga Kesehatan Reproduksi",
      description:
        "Kesehatan reproduksi penting untuk menjaga kesehatan diri, mencegah berbagai risiko penyakit, serta meningkatkan kesadaran dalam mengambil keputusan yang bertanggung jawab.",
      link: "#",
    },
  ];

  return (
    <div className="flex flex-col gap-[35px]">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-[32px] text-primary font-bold">Berita Terbaru</h1>

        <p>Informasi terbaru mengenai kegiatan PIK-R SAGA.</p>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center px-[30px]">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-[-25px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary text-white text-[50px] leading-none flex items-center justify-center hover:bg-accent hover:scale-110 transition"
        >
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {news.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="py-3">
                <NewsCard {...item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-[-25px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary text-white text-[40px] leading-none flex items-center justify-center hover:bg-accent hover:scale-110 transition"
        >
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
