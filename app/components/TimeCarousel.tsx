"use client"

import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Typography } from '@mui/material';
// Data
import data from './TimeData.json';
import TimeCarouselButton from './TimeCarouselButton';

// Define TypeScript interface for the resource
interface Resource {
  time: string
}

// Carousel component

const TimeCarousel: React.FC = () => {

  const [resources] = useState<Resource[]>(data.resources);
  const [maxScrollWidth, setMaxScrollWidth] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [initialized, setInitialized] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const startPosition = useRef<number>(0);
  const scrollPosition = useRef<number>(0);

  const touchStartX = useRef<number | null>(null);

  // Calculate max scroll width after the DOM is fully rendered
  useLayoutEffect(() => {
    if (carouselRef.current) {
      setMaxScrollWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
      setInitialized(true);
    }
  }, [resources]);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const moveNext = () => {
    if (carouselRef.current && currentIndex < maxScrollWidth / carouselRef.current.offsetWidth) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const isDisabled = (direction: "prev" | "next"): boolean => {
    if (!initialized) return true;
    if (direction === "prev") {
      return currentIndex <= 0;
    }
    if (direction === "next") {
      return carouselRef.current
        ? currentIndex >= maxScrollWidth / carouselRef.current.offsetWidth
        : true;
    }
    return false;
  };

  // Scroll to the current index
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = carouselRef.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  // Handle touch start
  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  // Handle touch move
  const handleTouchMove = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.touches[0].clientX;
    const deltaX = touchStartX.current - touchEndX;

    if (Math.abs(deltaX) > 50) { // Minimum swipe distance
      if (deltaX > 0) {
        moveNext(); // Swipe left
      } else {
        movePrev(); // Swipe right
      }
      touchStartX.current = null; // Reset
    }
  };

  // Handle mouse down
  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    startPosition.current = event.clientX;
    scrollPosition.current = carouselRef.current ? carouselRef.current.scrollLeft : 0;
  };

  // Handle mouse move
  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;

    const deltaX = event.clientX - startPosition.current;
    carouselRef.current.scrollLeft = scrollPosition.current - deltaX;
  };

  // Handle mouse up
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="carousel">
      <Typography
        className="flex"
        variant="h3"
        color="white"
        sx={{
          fontWeight: 500,
          fontFamily: 'Montserrat',
          fontSize: {
            xs: "8px",
            sm: "12px",  // Small screens
            md: "15px",  // Medium screens
            lg: "20px"
          }
        }}
      >
        TIME
      </Typography>
      <div className="relative overflow-hidden">

        <div className="flex justify-between absolute top-0 left-0 w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carouselRef}
          className="carousel-container relative flex gap-5 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {resources.map((resource, index) => (
            <TimeCarouselButton key={index} time={resource.time} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeCarousel;
