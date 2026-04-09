import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import type { ICity, IStateCardProps } from "../interfaces/ICity";
import { getAllCities } from "../services/cities";
import Link from "./link";

export function Carousel({ initialCityName }: { initialCityName?: string }) {
  const [cities, setCities] = useState<ICity[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const loadCities = async () => {
      const response = await getAllCities();

      if (!response.data) {
        throw new Error("Failed to fetch cities");
      }

      setCities(response.data);
    };

    loadCities();
  }, []);

  useEffect(() => {
    if (!initialCityName || cities.length === 0) return;

    const index = cities.findIndex(
      (c) => c.nome.toLowerCase() === initialCityName.toLowerCase(),
    );

    if (index >= 0) {
      swiperRef.current?.slideToLoop(index, 500);
    }
  }, [cities, initialCityName]);

  const getSlideClass = (index: number) => {
    const slidesCount = cities.length;

    if (index === activeIndex) return "scale-105 opacity-100";

    if (
      index === (activeIndex + 1) % slidesCount ||
      index === (activeIndex - 1 + slidesCount) % slidesCount
    ) {
      return "scale-90 opacity-80";
    }

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
            const isActive = index === activeIndex;

            const content = (
              <div className="flex flex-col items-center justify-center text-center">
                <div className="relative w-full h-40 rounded-3xl overflow-hidden shadow-lg bg-white p-2">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <img
                      src={city.imagem || "/logo.png"}
                      alt={city.nome}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <span
                  className={`mt-3 text-lg font-semibold ${
                    isActive ? "text-black" : "text-gray-400"
                  }`}
                >
                  {city.nome}
                </span>
              </div>
            );

            return (
              <SwiperSlide
                key={city.id}
                className={`transition-all duration-300 ease-in-out ${getSlideClass(
                  index,
                )}`}
              >
                {isActive ? (
                  <Link to={`/city?id=${city.id}`}>{content}</Link>
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

export function StateCard({ name }: IStateCardProps) {
  return (
    <div className="bg-blue-900 text-white rounded-lg p-4 text-center shadow hover:brightness-110 cursor-pointer">
      {name}
    </div>
  );
}
