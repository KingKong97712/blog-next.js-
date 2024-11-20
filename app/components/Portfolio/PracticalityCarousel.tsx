import React, { useRef } from "react";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// Constant for the cursor size
const CURSOR_SIZE = 80;

// Articles array
const articles = [
  {
    title:
      "Building a fully customisable carousel slider with swipe gestures and navigation using Framer Motion",
    url: "images/Portfolio/practicality/left.png",
  },
  {
    title:
      "Building a customisable Input component with NextJS, ReactHookForm, TailwindCSS and TypeScript",
    url: "images/Portfolio/practicality/main.png",
  },
  {
    title: "Handling Forms in NextJS with busboy, ReactHookForm and TypeScript",
    url: "images/Portfolio/practicality/right.png",
  },
];

// Helper function for class names
function cn(...inputs: (string | undefined | false)[]) {
  return twMerge(clsx(inputs));
}

export default function PracticalityCarousel() {
  const containerRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  // Placeholder navigation functions
  const handlePrev = () => {
    console.log("Navigate to previous");
  };

  const handleNext = () => {
    console.log("Navigate to next");
  };

  return (
    <div className="relative overflow-hidden">
      {/* Carousel Container */}
      <ul ref={containerRef} className="flex cursor-none items-start">
        {articles.map((article, index) => (
          <li
            key={article.title}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className={cn(
              "group relative shrink-0 select-none px-3 transition-opacity duration-300"
            )}
            style={{
              flexBasis: "30%",
            }}
          >
            {/* Article Link */}
            <Link
              href={article.url}
              className="block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={cn(
                  "grid place-content-center overflow-hidden rounded-lg bg-gray-900",
                  "aspect-[4/3]"
                )}
              >
                <span className="text-xl font-bold">{index}</span>
              </div>
            </Link>
            {/* Article Title */}
            <div className={cn("mt-4 flex justify-center")}>
              <Link
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-xl font-bold leading-tight transition-colors group-hover:text-lime-300"
              >
                {article.title}
              </Link>
            </div>
          </li>
        ))}
      </ul>

      {/* Navigation Buttons */}
      <IconButton
        onClick={handlePrev}
        className="group absolute left-[24%] top-1/3 z-20 grid aspect-square place-content-center rounded-full"
        style={{
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
        }}
        color="primary"
      >
        <ChevronLeft fontSize="large" />
      </IconButton>

      <IconButton
        onClick={handleNext}
        className="group absolute right-[24%] top-1/3 z-20 grid aspect-square place-content-center rounded-full"
        style={{
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
        }}
        color="primary"
      >
        <ChevronRight fontSize="large" />
      </IconButton>
    </div>
  );
}
