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
  const scrollRefMobile = useRef<HTMLDivElement>(null);
  const scrollRefDesktop = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    const isMobile = window.innerWidth < 640;
    const ref = isMobile ? scrollRefMobile : scrollRefDesktop;
    if (ref.current) {
      ref.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const isMobile = window.innerWidth < 640;
    const ref = isMobile ? scrollRefMobile : scrollRefDesktop;
    if (ref.current) {
      ref.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleBuyClick = () => {
    const storeNameEncoded = encodeURIComponent(store.nome);
    router.push(`/store/${storeNameEncoded}?id=${store.id}`);
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-md overflow-hidden min-w-0">
      <div className="sm:hidden">
        <div className="flex items-center gap-3 p-4 pb-12">
          <Image
            src={store.imagem}
            alt={store.nome}
            width={40}
            height={40}
            className="object-contain rounded-md flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h2 className="font-bold text-sm leading-tight truncate">
              {store.nome}
            </h2>
            <p className="text-xs text-gray-500 truncate">{store.categoria}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-4 pb-12">
          <button
            onClick={scrollLeft}
            className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition-all"
          >
            <ChevronLeft size={14} className="text-gray-600" />
          </button>

          <div
            ref={scrollRefMobile}
            className="flex-1 flex gap-2 overflow-x-auto scrollbar-hide pb-2 scroll-smooth min-w-0"
          >
            {store.produtos.map((produto, index) => (
              <div key={index} className="flex-shrink-0 w-14 h-14">
                <Image
                  src={produto}
                  alt={`Produto ${index + 1}`}
                  width={56}
                  height={56}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition-all"
          >
            <ChevronRight size={14} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="hidden sm:flex items-center">
        <div className="w-[200px] flex-shrink-0 flex gap-4 p-6">
          <Image
            src={store.imagem}
            alt={store.nome}
            width={60}
            height={60}
            className="object-contain rounded-md flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h2 className="font-bold text-base leading-tight truncate">
              {store.nome}
            </h2>
            <p className="text-sm text-gray-500 truncate">{store.categoria}</p>
          </div>
        </div>

        <div className="flex-1 flex items-center gap-2 min-w-0 p-6">
          <button
            onClick={scrollLeft}
            className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-all"
          >
            <ChevronLeft size={16} className="text-gray-600" />
          </button>

          <div
            ref={scrollRefDesktop}
            className="flex-1 flex gap-3 overflow-x-auto scrollbar-hide pb-2 scroll-smooth min-w-0"
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
            className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-all"
          >
            <ChevronRight size={16} className="text-gray-600" />
          </button>
        </div>
      </div>

      <button
        onClick={handleBuyClick}
        className="absolute bottom-2 left-4 bg-green-500 hover:bg-green-600 px-3 py-1.5 text-white rounded text-xs sm:text-sm font-medium transition-colors"
      >
        Compre Agora
      </button>

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
