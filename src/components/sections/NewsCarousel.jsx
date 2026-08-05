"use client";

import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import NewsCard from "../ui/NewsCard";

export default function NewsCarousel({ news }) {
  const swiperRef = useRef(null);

  return (
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
          <SwiperSlide key={item._id}>
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
  );
}