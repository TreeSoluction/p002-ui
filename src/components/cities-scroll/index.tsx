"use client";

import { ICity } from "@/interfaces/ICity";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CitiesCarouselProps {
  cities: ICity[];
  defaultCity?: ICity;
  selectedCityId?: string;
  onCityChange?: (city: ICity) => void;
  redirect?: boolean;
}

export function CitiesCarousel({
  cities,
  defaultCity,
  selectedCityId,
  onCityChange,
  redirect = false,
}: CitiesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    if (defaultCity && cities.length > 0) {
      const defaultIndex = cities.findIndex(
        (city) => city.id === defaultCity.id,
      );
      if (defaultIndex !== -1) {
        setActiveIndex(defaultIndex);
      }
    }
  }, [defaultCity, cities]);

  useEffect(() => {
    if (selectedCityId) {
      const selectedIndex = cities.findIndex(
        (c) => c.id.toString() === selectedCityId,
      );
      if (selectedIndex !== -1 && selectedIndex !== activeIndex) {
        setActiveIndex(selectedIndex);
      }
    }
  }, [selectedCityId, cities, activeIndex]);

  useEffect(() => {
    if (onCityChange && cities.length > 0) {
      const currentCity = cities[activeIndex];
      onCityChange(currentCity);
    }
  }, [activeIndex, cities, onCityChange]);

  const handlePrev = () => {
    setDirection("left");
    setActiveIndex((prev) => (prev - 1 + cities.length) % cities.length);
  };

  const handleNext = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % cities.length);
  };

  const getCity = (offset: number) =>
    cities[(activeIndex + offset + cities.length) % cities.length];

  const variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 100 : -100,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -100 : 100,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const renderSideCity = (
    city: ICity,
    position: "left" | "right",
    key: string,
  ) => (
    <motion.div
      key={key + city.id}
      initial={{ opacity: 0.4, scale: 0.7 }}
      animate={{ opacity: 0.5, scale: 0.8 }}
      exit={{ opacity: 0.2, scale: 0.6 }}
      transition={{ duration: 0.05, ease: "easeInOut" }}
      className="flex flex-col items-center gap-2"
    >
      <div className="relative w-[70px] h-[70px] md:w-[120px] md:h-[120px] rounded-xl overflow-hidden grayscale">
        <Image
          src={city.imagem}
          alt={city.nome}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-xs md:text-sm text-gray-500 truncate">{city.nome}</p>
    </motion.div>
  );

  if (cities.length === 0) return null;

  return (
    <div className="flex items-center justify-center gap-4 md:gap-8 p-4">
      <button
        onClick={handlePrev}
        className="p-2 md:p-3 rounded-full bg-white shadow text-green-bg hover:bg-gray-100 transition"
        aria-label="Anterior"
      >
        <ChevronLeft size={20} className="md:w-6 md:h-6" />
      </button>

      <div className="flex items-center justify-center gap-6 md:gap-12 w-[340px] md:w-[600px] overflow-hidden">
        {renderSideCity(getCity(-1), "left", "left")}

        <div className="w-[100px] h-[100px] md:w-[180px] md:h-[180px] relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={getCity(0).id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.05, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {redirect ? (
                <Link
                  href={`/segment?cityId=${getCity(0).id}`}
                  className="flex flex-col items-center gap-2 md:gap-4 h-full hover:scale-105 transition-transform duration-200"
                >
                  <div className="relative w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={getCity(0).imagem}
                      alt={getCity(0).nome}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm md:text-lg font-semibold text-gray-800 truncate hover:text-green-bg transition-colors">
                    {getCity(0).nome}
                  </p>
                </Link>
              ) : (
                <div className="flex flex-col items-center gap-2 md:gap-4 h-full hover:scale-105 transition-transform duration-200">
                  <div className="relative w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={getCity(0).imagem}
                      alt={getCity(0).nome}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm md:text-lg font-semibold text-gray-800 truncate hover:text-green-bg transition-colors">
                    {getCity(0).nome}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {renderSideCity(getCity(1), "right", "right")}
      </div>

      <button
        onClick={handleNext}
        className="p-2 md:p-3 rounded-full bg-white shadow text-green-bg hover:bg-gray-100 transition"
        aria-label="Próximo"
      >
        <ChevronRight size={20} className="md:w-6 md:h-6" />
      </button>
    </div>
  );
}
