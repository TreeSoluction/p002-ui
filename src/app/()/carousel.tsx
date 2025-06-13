"use client";

import cities from "@/utils/cities";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesCount = cities.length;

  const getSlideClass = (index: number) => {
    if (index === activeIndex) return "scale-105 opacity-100";
    if (
      index === (activeIndex + 1) % slidesCount ||
      index === (activeIndex - 1 + slidesCount) % slidesCount
    )
      return "scale-90 opacity-80";
    return "scale-75 opacity-50";
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 relative min-h-[280px]">
      <h2 className="text-center text-2xl font-semibold text-gray-700 mb-8">
        Selecione a cidade
      </h2>

      <div className="relative">
        <button
          className="custom-prev w-10 h-10 absolute -left-6 top-1/2 -translate-y-1/2 z-10 rounded-full flex items-center justify-center cursor-pointer"
          aria-label="Previous"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          className="custom-next w-10 h-10 absolute -right-6 top-1/2 -translate-y-1/2 z-10 rounded-full flex items-center justify-center cursor-pointer"
          aria-label="Next"
        >
          <ArrowRight className="w-6 h-6" />
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          loop
          centeredSlides
          slidesPerView={3}
          spaceBetween={30}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
        >
          {cities.map((city, index) => {
            const content = (
              <div className="flex flex-col items-center justify-center text-center">
                <div className="relative w-full h-40 rounded-3xl overflow-hidden shadow-lg bg-white p-2">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={city.image}
                      alt={city.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <span
                  className={`mt-3 text-lg font-semibold ${
                    index === activeIndex ? "text-black" : "text-gray-400"
                  }`}
                >
                  {city.name}
                </span>
              </div>
            );

            return (
              <SwiperSlide
                key={city.name}
                className={`transition-all duration-300 ease-in-out ${getSlideClass(index)}`}
              >
                {index === activeIndex ? (
                  <Link href={city.url}>{content}</Link>
                ) : (
                  <div aria-hidden>{content}</div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
