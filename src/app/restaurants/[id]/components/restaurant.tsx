"use client";

import { IRestaurant } from "@/interfaces/IRestaurant";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

interface RestaurantViewProps {
  restaurant: IRestaurant;
}

export function RestaurantView({ restaurant }: RestaurantViewProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const hasInstagram =
    !!restaurant.instagram?.trim() &&
    restaurant.instagram.trim().toUpperCase() !== "SEM_INSTAGRAM";

  const hasWhatsapp =
    !!restaurant.whatsapp?.trim() &&
    restaurant.whatsapp.trim().toUpperCase() !== "SEM_WHATSAPP";

  const instagramUsername = restaurant.instagram
    ?.replace("https://instagram.com/", "")
    .replace("https://www.instagram.com/", "")
    .replace("@", "")
    .trim();

  return (
    <>
      <div className="w-full bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-100 rounded-lg">
          <div className="flex flex-col items-center sm:items-start">
            <Image
              src={restaurant.imagem || "/logo.png"}
              alt={restaurant.nome}
              width={60}
              height={60}
              className="rounded-md object-cover"
            />
            <span className="mt-1 text-sm font-medium text-center sm:text-left text-gray-800">
              {restaurant.nome}
            </span>
          </div>

          <div className="text-sm text-gray-800 whitespace-pre-line break-words leading-relaxed sm:mt-1">
            {restaurant.local}
          </div>
        </div>

        <div className="flex gap-4 justify-center sm:justify-start p-4 pt-2 flex-wrap">
          {hasInstagram && instagramUsername && (
            <Link
              href={`https://instagram.com/${instagramUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[140px] flex flex-col items-center bg-gray-200 rounded-md px-2 py-1 hover:bg-gray-300"
            >
              <FaInstagram className="text-purple-500 text-xl" />
              <span className="text-[11px] text-gray-700 mt-1 text-center break-all">
                @{instagramUsername}
              </span>
            </Link>
          )}

          {hasWhatsapp && (
            <Link
              href={`https://wa.me/${restaurant.whatsapp.replace(/\D/g, "")}?text=Olá%2C%20vim%20do%20Feiras%20de%20Pernambuco%2C%20gostaria%20de%20mais%20informações.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[140px] flex flex-col items-center bg-gray-200 rounded-md px-2 py-1 hover:bg-gray-300"
            >
              <FaWhatsapp className="text-green-500 text-xl" />
              <span className="text-[11px] text-gray-700 mt-1 text-center break-all">
                {restaurant.whatsapp}
              </span>
            </Link>
          )}
        </div>

        <div className="flex flex-wrap gap-2 p-4 justify-center">
          {restaurant.produtos && restaurant.produtos.length > 0 ? (
            restaurant.produtos.map((base64, index) => (
              <Image
                key={index}
                src={base64}
                alt={`Produto ${index + 1}`}
                width={300}
                height={300}
                className="rounded-md object-cover cursor-pointer flex-shrink-0 w-[48%] sm:w-[30%] md:w-[23%]"
                onClick={() => setSelectedImage(base64)}
              />
            ))
          ) : (
            <p className="w-full text-center text-gray-500">
              Nenhum produto disponível.
            </p>
          )}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-6 right-6 z-50 text-white bg-black/60 hover:bg-black/80 rounded-full p-2 transition"
            aria-label="Fechar imagem"
          >
            <X size={24} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full px-4"
          >
            <Image
              src={selectedImage}
              alt="Imagem ampliada"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
