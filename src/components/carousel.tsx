"use client";

import cities from "@/utils/cities";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";

import { IStateCardProps } from "@/interfaces/ICity";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

export function Carousel({ initialCityName }: { initialCityName?: string }) {
  const initialIndex = initialCityName
    ? cities.findIndex(
        (c) => c.name.toLowerCase() === initialCityName.toLowerCase(),
      )
    : 0;

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const swiperRef = useRef<SwiperClass | null>(null);
  const slidesCount = cities.length;

  useEffect(() => {
    if (
      swiperRef.current &&
      typeof initialIndex === "number" &&
      initialIndex >= 0
    ) {
      swiperRef.current.slideToLoop(initialIndex, 0);
    }
  }, [initialIndex]);

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
          onSwiper={(swiper) => (swiperRef.current = swiper)}
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
                  <Link
                    href={`/city/${city.name.toLowerCase().replaceAll(" ", "-")}?id=${city.id}`}
                  >
                    {content}
                  </Link>
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

export function CityCarousel() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation = {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      };

      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="text-center w-full max-w-3xl mx-auto relative">
      <p className="text-gray-400 text-lg mb-8">Selecione a cidade</p>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {cities.map((city) => (
          <SwiperSlide key={city.id}>
            <Link href={city.url ?? "#"}>
              <span className="block text-sm text-gray-800 font-medium hover:text-gray-600 cursor-pointer text-center">
                {city.name}
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botões fora do Swiper */}
      <button
        ref={prevRef}
        className="cursor-pointer absolute top-12 left-0 text-gray-500 hover:text-gray-700 z-10 p-2"
        aria-label="Previous slide"
      >
        <ArrowLeft />
      </button>
      <button
        ref={nextRef}
        className="cursor-pointer absolute top-12 right-0 text-gray-500 hover:text-gray-700 z-10 p-2"
        aria-label="Next slide"
      >
        <ArrowRight />
      </button>
    </div>
  );
}

export function StateCard({ name }: IStateCardProps) {
  return (
    <div className="bg-blue-900 text-white rounded-lg p-4 text-center shadow hover:brightness-110 cursor-pointer">
      {name}
    </div>
  );
}
