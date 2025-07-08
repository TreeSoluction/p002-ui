"use client";

import { FeatureCard } from "@/components/feature-scroll/feature-card";
import { features } from "@/utils/features";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface FeaturesScrollProps {
  cityId?: string;
}

export function FeaturesScroll({ cityId }: FeaturesScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollAmount, setScrollAmount] = useState(0);

  const updateArrows = () => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = containerRef.current;
    const cardEl = cardRef.current;

    if (el && cardEl) {
      const cardStyle = getComputedStyle(cardEl);
      const cardWidth = cardEl.offsetWidth;
      const gap = parseInt(cardStyle.marginRight) || 0;

      setScrollAmount((cardWidth + gap) * 4);
    }
  }, []);

  useEffect(() => {
    updateArrows();
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateArrows);
    return () => el.removeEventListener("scroll", updateArrows);
  }, []);

  const scrollByAmountFunc = (distance: number) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto flex items-center gap-2 px-4 py-4">
      <button
        onClick={() => scrollByAmountFunc(-scrollAmount)}
        disabled={!canScrollLeft}
        aria-label="Scroll Left"
        className="p-2 rounded-full bg-white/10 text-black shadow-md disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/20 transition"
      >
        <ChevronLeft size={24} />
      </button>

      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent gap-6 flex-1 scroll-smooth snap-x snap-mandatory"
      >
        {features.map((item, index) => {
          const urlWithCity = cityId
            ? `${item.url}?cityId=${encodeURIComponent(cityId)}`
            : item.url;

          return (
            <div
              key={index}
              ref={index === 0 ? cardRef : null}
              className="snap-start"
            >
              <FeatureCard
                icon={item.icon}
                label={item.label}
                url={urlWithCity}
              />
            </div>
          );
        })}
      </div>

      <button
        onClick={() => scrollByAmountFunc(scrollAmount)}
        disabled={!canScrollRight}
        aria-label="Scroll Right"
        className="p-2 rounded-full bg-white/10 text-black shadow-md disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/20 transition"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
