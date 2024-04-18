"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    // Make sure to use full width (w-full) and potentially adjust overflow-hidden if necessary
    return (
      <div className="w-full flex flex-col antialiased bg-gray-100 ">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </div>
    );
  }
  
  

  const testimonials = [
    {
      quote:
        "5 Stones Roofing transformed our home! They were professional, efficient, and their attention to detail was impeccable. It's clear they take great pride in their work.",
      name: "",
      title: "Example Review",
    },
    {
      quote:
        "After a severe storm, we were in urgent need of roof repairs. The team at 5 Stones Roofing responded quickly and did an outstanding job. They truly saved the day!",
      name: "",
      title: "Example Review",
    },
    {
      quote:
        "Choosing 5 Stones Roofing for our new roof installation was the best decision. The result was beyond our expectations – excellent quality and service!",
      name: "",
      title: "Example Review",
    },
    {
      quote:
        "I'm thoroughly impressed by the professionalism and skill of the 5 Stones Roofing team. Our new roof looks fantastic, and the work was completed ahead of schedule!",
      name: "",
      title: "Example Review",
    },
    {
      quote:
        "5 Stones Roofing provided a detailed quote, answered all our questions, and the final price was exactly as quoted. No surprises, just great service.",
      name: "",
      title: "Example Review",
    },
    {
      quote:
        "I highly recommend 5 Stones Roofing. They not only fixed my leaky roof but also explained how to maintain it. I felt they truly cared about my home.",
      name: "",
      title: "Example Review",
    },
    {
      quote:
        "The team at 5 Stones Roofing was courteous, knowledgeable, and always on time. They left our property spotless after the job was done.",
      name: "",
      title: "Example Review",
    },
    {
      quote:
        "From start to finish, 5 Stones Roofing was a pleasure to work with. They made the entire process stress-free, and our roof has never looked better.",
      name: "",
      title: "Example Review",
    },
    {
      quote:
        "5 Stones Roofing's commitment to quality and customer satisfaction is evident. They went above and beyond to ensure we were happy with the work.",
      name: "",
      title: "Example Review",
    },
    {
      quote:
        "Our experience with 5 Stones Roofing was first-class. Their craftsmanship is top-notch, and they use high-quality materials. Definitely worth the investment!",
      name: "",
      title: "Example Review",
    },
  ];
  
