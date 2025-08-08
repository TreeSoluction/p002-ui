"use client";

import { IStore } from "@/interfaces/IStore";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface StoreCardProps {
  store: IStore;
}

export default function StoreCard({ store }: StoreCardProps) {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (e: React.MouseEvent) => {
    e.stopPropagation();
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = (e: React.MouseEvent) => {
    e.stopPropagation();
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  const handleBuyClick = () => {
    const storeNameEncoded = encodeURIComponent(store.nome);
    router.push(`/store/${storeNameEncoded}?id=${store.id}`);
  };

  const hasProducts = store.produtos && store.produtos.length > 0;

  return (
    <div
      className="relative bg-white rounded-2xl shadow-md overflow-hidden min-w-0 cursor-pointer p-4"
      onClick={handleBuyClick}
    >
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={store.imagem || "/logo.png"}
          alt={store.nome}
          width={60}
          height={60}
          className="object-contain rounded-md flex-shrink-0"
        />
        <h2 className="font-bold text-lg leading-snug break-words line-clamp-2">
          {store.nome}
        </h2>
      </div>

      {hasProducts && (
        <div className="relative mt-2">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-all"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <ChevronLeft size={16} className="text-gray-600" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth mx-10 pb-2"
            onClick={(e) => e.stopPropagation()}
          >
            {store.produtos.map((produto, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
              >
                <Image
                  src={produto}
                  alt={`Produto ${index + 1}`}
                  width={128}
                  height={128}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-all"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <ChevronRight size={16} className="text-gray-600" />
          </button>
        </div>
      )}

      <div className="mt-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleBuyClick();
          }}
          className="bg-green-500 hover:bg-green-600 px-3 py-1.5 text-white rounded text-xs sm:text-sm font-medium transition-colors"
        >
          Ver Loja
        </button>
      </div>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
