"use client";

import { ICalendar } from "@/interfaces/ICalendar";
import { getAllCalendars } from "@/services/calendar";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function CalendarScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [calendars, setCalendars] = useState<ICalendar[]>([]);
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
    (async () => {
      const data = (await getAllCalendars()).data;

      setCalendars(data);
    })();
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    const cardEl = cardRef.current;

    if (el && cardEl) {
      const cardStyle = getComputedStyle(cardEl);
      const cardWidth = cardEl.offsetWidth;
      const gap = parseInt(cardStyle.marginRight) || 0;
      setScrollAmount((cardWidth + gap) * 2.5);
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
        className="p-2 rounded-full bg-white/10 text-black shadow-md disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/20 transition"
      >
        <ChevronLeft size={24} />
      </button>

      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent gap-6 flex-1 scroll-smooth snap-x snap-mandatory"
      >
        {calendars.map((calendar, index) => (
          <div
            key={calendar.id}
            ref={index === 0 ? cardRef : null}
            className="snap-start shrink-0"
          >
            <Link
              href={`/calendar?id=${calendar.id}`}
              className="flex flex-col items-center p-4 w-[140px] sm:w-[160px] rounded-xl bg-white shadow hover:bg-green-100 transition"
            >
              <CalendarDays className="w-8 h-8 text-green-700 mb-2" />
              <span className="text-center text-sm font-medium text-gray-700">
                {calendar.titulo}
              </span>
            </Link>
          </div>
        ))}
      </div>

      <button
        onClick={() => scrollByAmountFunc(scrollAmount)}
        disabled={!canScrollRight}
        className="p-2 rounded-full bg-white/10 text-black shadow-md disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/20 transition"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
