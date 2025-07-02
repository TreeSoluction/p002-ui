"use client";

import { ICity } from "@/interfaces/ICity";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface CitiesCarouselProps {
  cities: ICity[];
}

export function CitiesCarousel({ cities }: CitiesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

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
      transition={{
        duration: 0.05,
        ease: "easeInOut",
      }}
      className="flex flex-col items-center gap-2"
    >
      <div className="relative w-[70px] h-[70px] rounded-xl overflow-hidden grayscale">
        <Image
          src={city.imagem}
          alt={city.nome}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-xs text-gray-500 truncate">{city.nome}</p>
    </motion.div>
  );

  return (
    <div className="flex items-center justify-center gap-4 p-4">
      <button
        onClick={handlePrev}
        className="p-2 rounded-full bg-white shadow text-green-bg hover:bg-gray-100 transition"
        aria-label="Anterior"
      >
        <ChevronLeft size={20} />
      </button>

      <div className="flex items-center justify-center gap-6 w-[340px] overflow-hidden">
        {renderSideCity(getCity(-1), "left", "left")}

        <div className="w-[100px] h-[100px] relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={getCity(0).id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.05, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center gap-2"
            >
              <div className="relative w-[100px] h-[100px] rounded-xl overflow-hidden shadow-md">
                <Image
                  src={getCity(0).imagem}
                  alt={getCity(0).nome}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-semibold text-gray-800 truncate">
                {getCity(0).nome}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {renderSideCity(getCity(1), "right", "right")}
      </div>

      <button
        onClick={handleNext}
        className="p-2 rounded-full bg-white shadow text-green-bg hover:bg-gray-100 transition"
        aria-label="Próximo"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
