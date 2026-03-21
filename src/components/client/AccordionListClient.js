"use client";

import { useState } from "react";
import { ChevronDown, ChevronLeft } from "lucide-react";

export default function AccordionListClient({
  items,
  defaultOpen = 0,
  variant = "light",
  questionClassName = "",
  answerClassName = "",
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  const light = variant === "light";

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question || item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={`flex w-full items-center justify-between gap-4 ${
                light ? "rounded-t-[8px] bg-white px-5 py-4" : "px-0 py-1"
              } text-left`}
              aria-expanded={isOpen}
            >
              <span
                className={`font-semibold ${
                  light ? "text-[16px] text-[#0d2b63]" : "text-[#06245b]"
                } ${questionClassName}`}
              >
                {item.question || item.title}
              </span>

              <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[4px] bg-gradient-to-r from-[#1699e8] to-[#4166e8] text-white">
                {isOpen ? (
                  <ChevronDown className="h-5 w-5" />
                ) : (
                  <ChevronLeft className="h-5 w-5" />
                )}
              </span>
            </button>

            {isOpen && (
              <div
                className={`${
                  light
                    ? "rounded-b-[8px] bg-white px-5 pb-5"
                    : "border-t border-[#e8eeff] px-0 pb-0 pt-4"
                } text-[14px] leading-[1.9] text-[#7a7a7a] ${answerClassName}`}
              >
                {item.content || item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
