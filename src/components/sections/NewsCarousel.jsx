"use client";

import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import NewsCard from "../ui/NewsCard";

export default function NewsCarousel({ news }) {
  const swiperRef = useRef(null);
  const [navigation, setNavigation] = useState({
    canGoPrevious: false,
    canGoNext: false,
  });

  function updateNavigation(swiper) {
    setNavigation({
      canGoPrevious: !swiper.isBeginning && !swiper.isLocked,
      canGoNext: !swiper.isEnd && !swiper.isLocked,
    });
  }

  if (!news.length) {
    return (
      <div className="rounded-3xl border border-dashed border-primary/20 bg-white/70 px-6 py-12 text-center">
        <p className="text-lg font-semibold text-primary">
          Belum ada berita terbaru
        </p>
        <p className="mt-2 text-sm text-paragraph/70">
          Silakan kembali lagi nanti untuk melihat kabar dari PIK-R SAGA.
        </p>
      </div>
    );
  }

  return (
    <div className="relative flex items-center px-0 sm:px-8">
      <button
        type="button"
        aria-label="Lihat berita sebelumnya"
        disabled={!navigation.canGoPrevious}
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary/10 bg-white text-primary shadow-lg transition hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:left-2 sm:size-12"
      >
        <ChevronLeft aria-hidden="true" size={23} strokeWidth={2.5} />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          updateNavigation(swiper);
        }}
        onSlideChange={updateNavigation}
        onResize={updateNavigation}
        onBreakpoint={updateNavigation}
        className="w-full !items-stretch"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
      >
        {news.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="h-full py-3">
              <NewsCard {...item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        aria-label="Lihat berita selanjutnya"
        disabled={!navigation.canGoNext}
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary/10 bg-white text-primary shadow-lg transition hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:right-2 sm:size-12"
      >
        <ChevronRight aria-hidden="true" size={23} strokeWidth={2.5} />
      </button>
    </div>
  );
}