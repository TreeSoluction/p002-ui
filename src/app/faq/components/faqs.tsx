"use client";
import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "Feiras de Pernambuco tem ponto fisico?",
    answer: "Texto",
  },
  {
    question: "Quando tem feira em Caruaru?",
    answer: "Texto",
  },
  {
    question: "Quando tem feira em Toritama?",
    answer: "Texto",
  },
  {
    question: "Quando tem feira em Santa Cruz?",
    answer: "Texto",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
        FAQ - Perguntas Frequentes
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <FaqItem
            key={i}
            faq={faq}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>
    </main>
  );
}

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-300 rounded-md overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
      >
        <span className="font-semibold">{faq.question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        ref={contentRef}
        style={{
          height: height,
          transition: "height 300ms ease",
          overflow: "hidden",
        }}
        className="px-4 bg-white border-t border-gray-300 text-gray-700"
      >
        <div className="py-3">{faq.answer}</div>
      </div>
    </div>
  );
}
