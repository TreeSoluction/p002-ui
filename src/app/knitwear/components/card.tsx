"use client";

import { IKnitwear } from "@/interfaces/IKnitwear";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface KnitwearCardProps {
  knitwear: IKnitwear;
}

export default function KnitwearCard({ knitwear }: KnitwearCardProps) {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleClick = () => {
    router.push(`/knitwear/${knitwear.id}`);
  };

  const hasProducts = knitwear.produtos && knitwear.produtos.length > 0;

  return (
    <div
      className="relative bg-white rounded-2xl shadow-md overflow-hidden min-w-0 cursor-pointer p-4"
      onClick={handleClick}
    >
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={knitwear.imagem || "/logo.png"}
          alt={knitwear.nome}
          width={60}
          height={60}
          className="object-contain rounded-md flex-shrink-0"
        />
        <h2 className="font-bold text-lg leading-snug break-words line-clamp-2">
          {knitwear.nome}
        </h2>
      </div>

      {hasProducts && (
        <div className="flex items-center gap-2">
          <button
            onClick={scrollLeft}
            className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-all z-10"
          >
            <ChevronLeft size={16} className="text-gray-600" />
          </button>

          <div
            ref={scrollRef}
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex gap-3 overflow-x-auto scrollbar-hide pb-2 scroll-smooth min-w-0"
          >
            {knitwear.produtos.map((produto, index) => (
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
            className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-all z-10"
          >
            <ChevronRight size={16} className="text-gray-600" />
          </button>
        </div>
      )}

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
