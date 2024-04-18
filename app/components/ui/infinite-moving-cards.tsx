"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "../../../utils/cn";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  const handleResize = () => {
    // Your logic here to dynamically adjust the number of clones based on the container width
  };

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item, index) => {
        // Assert that the cloned node is an HTMLElement
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.id = `clone-${index}`; // Assign unique ID or key for cloned items
        scrollerRef.current?.appendChild(duplicatedItem);
      });
  
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "reverse" : "forwards"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 w-full overflow-hidden bg-gray-100", // Full width and no maximum width limit
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:pause"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative rounded-2xl border-2 border-navy-500 bg-white text-navy-900 px-8 py-6"
            key={idx} // Use index as key for initial items (Ensure keys are unique when cloning)
            style={{ minWidth: '350px', maxWidth: '450px' }} // Responsive width
          >
            <blockquote>
              <span className="block text-sm leading-[1.6] font-normal">
                {item.quote}
              </span>
              <div className="mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal">
                    {item.name || "Anonymous"} 
                  </span>
                  <span className="text-sm leading-[1.6] font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
