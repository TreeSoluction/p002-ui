"use client";
import { ICity } from "@/interfaces/ICity";
import { motion } from "framer-motion";
import Image from "next/image";

interface CityCardProps {
  city: ICity;
  size: "small" | "large";
}

export function CityCard({ city, size }: CityCardProps) {
  const isLarge = size === "large";

  return (
    <motion.div
      initial={{ scale: isLarge ? 0.9 : 0.8, opacity: isLarge ? 0.8 : 0.4 }}
      animate={{ scale: isLarge ? 1 : 0.8, opacity: isLarge ? 1 : 0.4 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center max-w-[110px]"
    >
      <div
        className={`relative rounded-xl overflow-hidden shadow-sm ${
          isLarge ? "w-[110px] h-[110px]" : "w-[70px] h-[70px]"
        }`}
      >
        <Image
          src={city.imagem}
          alt={city.nome}
          fill
          className="object-cover"
          sizes={isLarge ? "110px" : "70px"}
          priority={isLarge}
        />
      </div>
      <p
        className={`mt-1 text-center font-semibold text-gray-800 truncate ${
          isLarge ? "text-sm" : "text-[10px]"
        }`}
      >
        {city.nome}
      </p>
    </motion.div>
  );
}
