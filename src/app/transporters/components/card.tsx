"use client";

import { ITransport } from "@/interfaces/ITransport";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface TransportCardProps {
  transport: ITransport;
}

export default function TransportCard({ transport }: TransportCardProps) {
  const router = useRouter();
  const scrollRefMobile = useRef<HTMLDivElement>(null);
  const scrollRefDesktop = useRef<HTMLDivElement>(null);

  const scrollLeft = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isMobile = window.innerWidth < 640;
    const ref = isMobile ? scrollRefMobile : scrollRefDesktop;
    if (ref.current) {
      ref.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isMobile = window.innerWidth < 640;
    const ref = isMobile ? scrollRefMobile : scrollRefDesktop;
    if (ref.current) {
      ref.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleBuyClick = () => {
    router.push(`/transporters/${transport.id}`);
  };

  const hasProducts = transport.produtos && transport.produtos.length > 0;

  return (
    <div
      className="relative bg-white rounded-2xl shadow-md overflow-hidden min-w-0 cursor-pointer"
      onClick={handleBuyClick}
    >
      <div className="sm:hidden">
        <div className="flex items-center gap-3 p-4 pb-4">
          <Image
            src={transport.imagem || "/logo.png"}
            alt={transport.nome}
            width={40}
            height={40}
            className="object-contain rounded-md flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h2 className="font-bold text-sm leading-tight break-words">
              {transport.nome}
            </h2>
          </div>
        </div>

        <div className="hidden sm:flex items-center">
          {hasProducts ? (
            <>
              <div className="w-[200px] flex-shrink-0 flex gap-4 p-6">
                <Image
                  src={transport.imagem || "/logo.png"}
                  alt={transport.nome}
                  width={60}
                  height={60}
                  className="object-contain rounded-md flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h2 className="font-bold text-base leading-tight break-words">
                    {transport.nome}
                  </h2>
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
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex gap-3 overflow-x-auto scrollbar-hide pb-2 scroll-smooth min-w-0"
                >
                  {transport.produtos.map((produto, index) => (
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
            </>
          ) : (
            <div className="flex gap-4 p-6 w-full">
              <Image
                src={transport.imagem || "/logo.png"}
                alt={transport.nome}
                width={60}
                height={60}
                className="object-contain rounded-md flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h2 className="font-bold text-base leading-tight break-words">
                  {transport.nome}
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="hidden sm:flex items-center">
        {hasProducts ? (
          <>
            <div className="w-[200px] flex-shrink-0 flex gap-4 p-6">
              <Image
                src={transport.imagem || "/logo.png"}
                alt={transport.nome}
                width={60}
                height={60}
                className="object-contain rounded-md flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h2 className="font-bold text-base leading-tight break-words">
                  {transport.nome}
                </h2>
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
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex gap-3 overflow-x-auto scrollbar-hide pb-2 scroll-smooth min-w-0"
              >
                {transport.produtos.map((produto, index) => (
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
          </>
        ) : (
          <div className="flex gap-4 p-6 w-full">
            <Image
              src={transport.imagem || "/logo.png"}
              alt={transport.nome}
              width={60}
              height={60}
              className="object-contain rounded-md flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-base leading-tight break-words">
                {transport.nome}
              </h2>
            </div>
          </div>
        )}
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
