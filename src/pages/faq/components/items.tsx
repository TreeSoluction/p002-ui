import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

export function FAQItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-medium"
      >
        {faq.question}
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 py-3 bg-white border-t border-gray-300 text-gray-700">
            {faq.answer}
          </div>
        </div>
      </div>
    </div>
  );
}
