"use client";

import { IStore } from "@/interfaces/IStore";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

interface StoreViewProps {
  store: IStore;
}

export function StoreView({ store }: StoreViewProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const hasInstagram =
    !!store.instagram?.trim() &&
    store.instagram.trim().toUpperCase() !== "SEM_INSTAGRAM";

  const hasWhatsapp =
    !!store.whatsapp?.trim() &&
    store.whatsapp.trim().toUpperCase() !== "SEM_WHATSAPP";

  const instagramUsername = store.instagram
    ?.replace("https://instagram.com/", "")
    .replace("https://www.instagram.com/", "")
    .replace("@", "")
    .trim();

  return (
    <>
      <div className="w-full bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex items-center justify-between p-4 rounded-lg bg-gray-100">
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <Image
                src={store.imagem}
                alt={store.nome}
                width={60}
                height={60}
                className="rounded-md object-cover"
              />
              <span className="mt-1 text-sm font-medium text-center text-gray-800">
                {store.nome}
              </span>
            </div>

            <div className="flex flex-col text-sm text-gray-800 mt-1">
              <span>{store.local}</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            {hasInstagram && instagramUsername && (
              <Link
                href={`https://instagram.com/${instagramUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[120px] flex flex-col items-center bg-gray-200 rounded-md px-2 py-1 hover:bg-gray-300"
              >
                <FaInstagram className="text-purple-500 text-xl" />
                <span className="text-[10px] text-gray-700 mt-1 truncate w-full text-center">
                  @{instagramUsername}
                </span>
              </Link>
            )}

            {hasWhatsapp && (
              <Link
                href={`https://wa.me/${store.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[120px] flex flex-col items-center bg-gray-200 rounded-md px-2 py-1 hover:bg-gray-300"
              >
                <FaWhatsapp className="text-green-500 text-xl" />
                <span className="text-[10px] text-gray-700 mt-1 truncate w-full text-center">
                  {store.whatsapp}
                </span>
              </Link>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 p-4 justify-center">
          {store.produtos && store.produtos.length > 0 ? (
            store.produtos.map((base64, index) => (
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
